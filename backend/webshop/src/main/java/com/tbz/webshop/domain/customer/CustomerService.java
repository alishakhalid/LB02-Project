package com.tbz.webshop.domain.customer;

import javax.management.InstanceNotFoundException;
import java.util.List;
import java.util.UUID;

public interface CustomerService {
    Customer findCustomerById(UUID id) throws InstanceNotFoundException;
    List<Customer> findAllCustomers() throws NullPointerException;
    Customer findByEmail(String email) throws InstanceNotFoundException;
}
