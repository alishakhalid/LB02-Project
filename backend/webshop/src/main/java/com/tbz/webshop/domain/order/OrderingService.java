package com.tbz.webshop.domain.order;

import javax.management.InstanceAlreadyExistsException;
import java.security.Principal;
import java.util.List;
import java.util.UUID;

public interface OrderingService {
    //Order createOrderingByPrincipalId(Order order, Principal principal) throws InstanceAlreadyExistsException, NullPointerException;
    List<Order> findAllOrders() throws NullPointerException;
    Order findOrderByCustomerId(UUID customerId) throws NullPointerException;
}
