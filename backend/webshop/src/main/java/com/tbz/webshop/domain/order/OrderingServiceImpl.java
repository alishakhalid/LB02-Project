package com.tbz.webshop.domain.order;

import com.tbz.webshop.domain.customer.Customer;

import javax.management.InstanceAlreadyExistsException;
import java.util.List;
import java.util.UUID;

public class OrderingServiceImpl implements OrderingService{
    @Override
    public Order createOrderingByCustomerId(Order order, Customer customerId) throws InstanceAlreadyExistsException, NullPointerException {
        return null;
    }

    @Override
    public List<Order> findAllOrders() throws NullPointerException {
        return null;
    }

    @Override
    public Order findOrderByCustomerId(UUID customerId) throws NullPointerException {
        return null;
    }
}
