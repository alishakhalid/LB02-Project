package com.tbz.webshop.domain.customer;


import com.tbz.webshop.domain.cart.Cart;
import com.tbz.webshop.domain.country.Country;
import com.tbz.webshop.domain.location.Location;

import javax.management.InstanceAlreadyExistsException;
import javax.management.InstanceNotFoundException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

public class CustomerServiceImpl implements CustomerService{

    @Override
    public Customer findCustomerById(UUID id) throws InstanceNotFoundException {
        return null;
    }

    @Override
    public Cart findCartByCustomerId(UUID customerId) throws NoSuchElementException {
        return null;
    }

    @Override
    public Cart addProductToCartByCustomerId(Cart cart, Customer uuid) throws InstanceAlreadyExistsException, NullPointerException {
        return null;
    }

    @Override
    public Customer createCustomer(Customer customer) throws InstanceAlreadyExistsException, NullPointerException {
        return null;
    }

    @Override
    public List<Location> findAllLocation() throws NullPointerException {
        return null;
    }

    @Override
    public List<Country> findAllCountries() throws NullPointerException {
        return null;
    }

    @Override
    public boolean existsByCredentials(String username, String password) throws NoSuchElementException {
        return false;
    }
}
