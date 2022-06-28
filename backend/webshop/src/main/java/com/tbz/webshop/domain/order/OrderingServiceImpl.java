package com.tbz.webshop.domain.order;

import com.tbz.webshop.domain.customer.Customer;
import com.tbz.webshop.domain.customer.CustomerService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Validator;

import javax.management.InstanceAlreadyExistsException;
import java.security.Principal;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@NoArgsConstructor
@Transactional
public class OrderingServiceImpl implements OrderingService{


    @Autowired
    private OrderRepository orderRepository;

    private CustomerService customerService;

    @Override
    // TODO
    public Order createOrderingByCustomerId(Order order,UUID customerId) throws InstanceAlreadyExistsException, NullPointerException {
        return null;
    }

    @Override
    public List<Order> findAllOrders() throws NullPointerException {
        List<Order> orderList = this.orderRepository.findAll();

        if(!(orderList.isEmpty() || orderList == null)){
            return orderList;
        } else
            throw new NullPointerException("Order List is empty");
    }

    @Override
    public Order findOrderByCustomerId(UUID customerId) throws NullPointerException {

        Optional<Order> optionalOrder = orderRepository.findOrderByCustomerId(customerId);

        if(optionalOrder.isEmpty() || optionalOrder == null) {
            throw new NullPointerException("Customer's Order does not exist");
        } else
            return optionalOrder.get();
    }
}
