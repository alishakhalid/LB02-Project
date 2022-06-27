package com.tbz.webshop.domain.customer;


import com.tbz.webshop.domain.cart.Cart;
import com.tbz.webshop.domain.country.Country;
import com.tbz.webshop.domain.country.CountryRepository;
import com.tbz.webshop.domain.location.Location;
import com.tbz.webshop.domain.location.LocationRepository;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.management.InstanceAlreadyExistsException;
import javax.management.InstanceNotFoundException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.UUID;

@Service
@NoArgsConstructor
@Slf4j
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    public  CustomerRepository customerRepository;
    @Autowired
    public LocationRepository locationRepository;
    @Autowired
    public CountryRepository countryRepository;


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

    //TODO
    @Override
    public Cart findCartByCustomerId(UUID customerId) throws NoSuchElementException {
        return null;
    }

    //TODO
    @Override
    public Cart addProductToCartByCustomerId(Cart cart, Customer uuid) throws InstanceAlreadyExistsException, NullPointerException {
        return null;
    }

    @Override
    public Customer registerUser(Customer customer) throws InstanceAlreadyExistsException, NullPointerException {
        if (customer.getCustomerEmail().isEmpty() || customer.getCustomerPassword().isEmpty() || customer.getCustomerSurname().isEmpty()) {
            throw new NullPointerException("All values are required");
        } else if (customerRepository.existsByCustomerEmail(customer.getCustomerEmail())) {
            throw new InstanceAlreadyExistsException("Customer with this email already exists");
        } else {
            customerRepository.save(customer);
            return customer;
        }
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

    @Override
    public boolean existsByCredentials(String username, String password) throws NoSuchElementException {
        return false;
    }

}
