package com.tbz.webshop.domain.customer;


import com.tbz.webshop.domain.cart.Cart;
import com.tbz.webshop.domain.cart.CartRepository;
import com.tbz.webshop.domain.country.Country;
import com.tbz.webshop.domain.country.CountryRepository;
import com.tbz.webshop.domain.location.Location;
import com.tbz.webshop.domain.location.LocationRepository;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.management.InstanceAlreadyExistsException;
import javax.management.InstanceNotFoundException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.UUID;

@Service
@NoArgsConstructor
@Slf4j
@Transactional
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    public  CustomerRepository customerRepository;
    @Autowired
    public LocationRepository locationRepository;
    @Autowired
    public CountryRepository countryRepository;
    @Autowired
    public CartRepository cartRepository;


    @Override
    public Customer findCustomerById(UUID id) throws InstanceNotFoundException {
        Optional<Customer> optionalCustomer = customerRepository.findById(id);

        if(optionalCustomer.isEmpty() || optionalCustomer == null) {
            throw new InstanceNotFoundException("Customer does not exist");
        } else
            return optionalCustomer.get();
    }

    @Override
    public Customer findCustomerByCustomerEmail(String email) throws InstanceNotFoundException {
        Optional<Customer> optionalCustomer = customerRepository.findCustomerByCustomerEmail(email);

        if(optionalCustomer.isEmpty() || optionalCustomer == null) {
            throw new InstanceNotFoundException("Customer does not exist");
        } else
            return optionalCustomer.get();
    }

    @Override
    public Cart findCartByCustomerId(UUID customerId) throws NoSuchElementException, InstanceNotFoundException {
        Optional<Cart> optionalCart = cartRepository.findCartClothingByCustomer(customerId);

        if(optionalCart.isEmpty() || optionalCart == null) {
            throw new InstanceNotFoundException("Cart is empty");
        } else
            return optionalCart.get();
    }

    @Override
    public Customer registerUser(Customer customer) throws InstanceAlreadyExistsException, NullPointerException {
        if (customer.getCustomerEmail().isEmpty() || customer.getPassword().isEmpty() || customer.getCustomerSurname().isEmpty()) {
            throw new NullPointerException("All values are required");
        } else if (customerRepository.existsByCustomerEmail(customer.getCustomerEmail())) {
            throw new InstanceAlreadyExistsException("Customer with this email already exists");
        } else {
            customerRepository.save(customer);
            return customer;
        }
    }

    @Override
    public Cart createCartByCustomerId(Cart cart, UUID customerId) throws InstanceAlreadyExistsException, NullPointerException {
        Customer customer = customerRepository.findById(customerId).orElseThrow(()-> new InstanceAlreadyExistsException("Customer not found"));
        Cart newCart = new Cart();
        newCart.setShippingPrice(cart.getShippingPrice());
        newCart.setTotalPrice(cart.getTotalPrice());
        customer.setCart(cart);
        return cartRepository.save(newCart);
    }

    @Override
    public List<Location> findAllLocation() throws NullPointerException {
        List<Location> locationList = locationRepository.findAll();

        if(!(locationList.isEmpty() || locationList == null)){
            return locationList;
        } else
            throw new NullPointerException("Location List is empty");
    }

    @Override
    public List<Country> findAllCountries() throws NullPointerException {
        List<Country> countryList = countryRepository.findAll();

        if(!(countryList.isEmpty() || countryList == null)){
            return countryList;
        } else
            throw new NullPointerException("Country List is empty");
    }


    /*@Override
    public Customer existsByCredentials(String username, String password) throws NoSuchElementException {
        Optional<Customer> customer = customerRepository.existsByCredentials(username, password);

        if(customer.isEmpty() || customer == null) {
            throw new NoSuchElementException("This combination does not exist");
        } else
            return customer.get();
    }*/

}
