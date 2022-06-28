package com.tbz.webshop.domain.customer;

import com.tbz.webshop.domain.cart.Cart;
import com.tbz.webshop.domain.country.Country;
import com.tbz.webshop.domain.location.Location;

import javax.management.InstanceAlreadyExistsException;
import javax.management.InstanceNotFoundException;
import java.util.List;
import java.util.UUID;

public interface CustomerService {
    Customer findCustomerById(UUID id) throws InstanceNotFoundException;

    Customer findCustomerByCustomerEmail(String email) throws InstanceNotFoundException;

    Cart findCartByCustomerId(UUID customerId) throws InstanceNotFoundException;

    Customer registerUser(Customer customer) throws InstanceAlreadyExistsException, NullPointerException;

    Cart createCartByCustomerId(Cart cart, UUID customerId) throws InstanceAlreadyExistsException, NullPointerException;

    List<Location> findAllLocation() throws NullPointerException, InstanceNotFoundException;

    List<Country> findAllCountries() throws NullPointerException, InstanceNotFoundException;

    //Customer existsByCredentials(String username, String password) throws NoSuchElementException;
}
