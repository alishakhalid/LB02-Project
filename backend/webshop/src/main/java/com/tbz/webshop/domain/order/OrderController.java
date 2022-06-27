package com.tbz.webshop.domain.order;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping(value = {"/order"})
@Slf4j
public class OrderController {

    @Autowired
    private OrderingService orderingService;

    @GetMapping
    public ResponseEntity findAllOrders(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(orderingService.findAllOrders());
        } catch (NullPointerException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("{id}")
    public ResponseEntity findOrderByCustomerId(@PathVariable UUID customerId){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(orderingService.findOrderByCustomerId(customerId));
        } catch (NullPointerException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
}
