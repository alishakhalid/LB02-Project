package com.tbz.webshop.domain.customer;

import com.tbz.webshop.domain.cart.Cart;
import com.tbz.webshop.domain.country.Country;
import com.tbz.webshop.domain.location.Location;

import javax.management.InstanceAlreadyExistsException;
import javax.management.InstanceNotFoundException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

public interface CustomerService {
    Customer findCustomerById(UUID id) throws InstanceNotFoundException;

    Cart findCartByCustomerId(UUID customerId) throws NoSuchElementException;

    Cart addProductToCartByCustomerId(Cart cart, Customer uuid) throws InstanceAlreadyExistsException, NullPointerException;

    //TODO cart should be created parallel
    UUID registerUser(Customer customer) throws InstanceAlreadyExistsException, NullPointerException;

    List<Location> findAllLocation() throws NullPointerException, InstanceNotFoundException;

    List<Country> findAllCountries() throws NullPointerException, InstanceNotFoundException;

    public boolean existsByCredentials(String username, String password) throws NoSuchElementException;
}
