package com.tbz.webshop.domain.order;

import com.tbz.webshop.domain.customer.Customer;

import javax.management.InstanceAlreadyExistsException;
import java.util.List;
import java.util.UUID;

public interface OrderingService {
    Order createOrderingByCustomerId(Order order, Customer customerId) throws InstanceAlreadyExistsException, NullPointerException;
    List<Order> findAllOrders() throws NullPointerException;
    Order findOrderByCustomerId(UUID customerId) throws NullPointerException;
}
