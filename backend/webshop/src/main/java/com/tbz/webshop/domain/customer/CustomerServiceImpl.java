package com.tbz.webshop.domain.customer;


import com.tbz.webshop.domain.cart.Cart;
import com.tbz.webshop.domain.cart.CartRepository;
import com.tbz.webshop.domain.country.Country;
import com.tbz.webshop.domain.country.CountryRepository;
import com.tbz.webshop.domain.location.Location;
import com.tbz.webshop.domain.location.LocationRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.management.InstanceAlreadyExistsException;
import javax.management.InstanceNotFoundException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
@Getter
@Setter
public class CustomerServiceImpl implements CustomerService, UserDetailsService {

    @Autowired
    public CustomerRepository customerRepository;
    @Autowired
    public LocationRepository locationRepository;
    @Autowired
    public CountryRepository countryRepository;
    @Autowired
    public CartRepository cartRepository;

    @Autowired
    PasswordEncoder encoder;

    @Override
    public Customer findCustomerById(UUID id) throws InstanceNotFoundException {
        Optional<Customer> optionalCustomer = customerRepository.findById(id);

        if (optionalCustomer.isEmpty() || optionalCustomer == null) {
            throw new InstanceNotFoundException("Customer does not exist");
        } else
            return optionalCustomer.get();
    }

    @Override
    public Customer findCustomerByCustomerEmail(String email) throws InstanceNotFoundException {
        Optional<Customer> optionalCustomer = customerRepository.findCustomerByCustomerEmail(email);

        if (optionalCustomer.isEmpty() || optionalCustomer == null) {
            throw new InstanceNotFoundException("Customer does not exist");
        } else
            return optionalCustomer.get();
    }

    @Override
    public Cart findCartByCustomerId(UUID customerId) throws NoSuchElementException, InstanceNotFoundException {
        Optional<Cart> optionalCart = cartRepository.findCartClothingByCustomer(customerId);

        if (optionalCart.isEmpty() || optionalCart == null) {
            throw new InstanceNotFoundException("Cart is empty");
        } else
            return optionalCart.get();
    }

    @Override
    public Cart createCartByCustomerId(Cart cart, UUID customerId) throws InstanceAlreadyExistsException, NullPointerException {
        Customer customer = customerRepository.findById(customerId).orElseThrow(() -> new InstanceAlreadyExistsException("Customer not found"));
        Cart newCart = new Cart();
        newCart.setShippingPrice(cart.getShippingPrice());
        newCart.setTotalPrice(cart.getTotalPrice());
        return cartRepository.save(newCart);
    }

    @Override
    public List<Location> findAllLocation() throws NullPointerException {
        List<Location> locationList = locationRepository.findAll();

        if (!(locationList.isEmpty() || locationList == null)) {
            return locationList;
        } else
            throw new NullPointerException("Location List is empty");
    }

    @Override
    public List<Country> findAllCountries() throws NullPointerException {
        List<Country> countryList = countryRepository.findAll();

        if (!(countryList.isEmpty() || countryList == null)) {
            return countryList;
        } else
            throw new NullPointerException("Country List is empty");
    }

    @Override
    public List<Customer> findAllCustomers() throws NullPointerException, InstanceNotFoundException {
        List<Customer> customerList = customerRepository.findAll();

        if (!(customerList.isEmpty() || customerList == null)) {
            return customerList;
        } else
            throw new NullPointerException("Customer List is empty");
    }

    @Override
    public Customer saveCustomer(CustomerDTO customerDTO) throws InstanceAlreadyExistsException {

        if (customerRepository.existsByCustomerEmail(customerDTO.getCustomerEmail())) {
            throw  new InstanceAlreadyExistsException("Email is already given");
        }

        Country country = countryRepository.findByCountryName(customerDTO.getCountry());
        Location location = locationRepository.findByLocationName(customerDTO.getLocation());

        Customer customer = new Customer(customerDTO.getCustomerSurname(), customerDTO.getCustomerLastname(),
                customerDTO.getCustomerEmail(), customerDTO.getCustomerAddress(),
                encoder.encode(customerDTO.getPassword()),
                country, location);

        return customerRepository.save(customer);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Customer user = customerRepository.findByCustomerEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + email));

        return CustomerDetailsImpl.build(user);
    }
}
