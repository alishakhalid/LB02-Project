package com.tbz.webshop.domain.customer;

import com.tbz.webshop.domain.cart.Cart;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.InstanceAlreadyExistsException;
import javax.management.InstanceNotFoundException;
import java.util.UUID;


@RestController
@CrossOrigin("origins")
@RequestMapping(value = {"/customer"})
@Slf4j
public class CustomerController {

    @Autowired
    public CustomerService customerService;

    @GetMapping("/single/{id}")
    public ResponseEntity findCustomerById(@PathVariable UUID id){

        try {
            return ResponseEntity.status(HttpStatus.OK).body(customerService.findCustomerById(id));
        } catch (InstanceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (NullPointerException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/{email}")
    public ResponseEntity findCustomerByEmail(@PathVariable String email){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(customerService.findCustomerByCustomerEmail(email));
        } catch (InstanceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (NullPointerException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/cart/{id}")
    public ResponseEntity findCartByCustomerId(@PathVariable UUID customerId){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(customerService.findCartByCustomerId(customerId));
        } catch (InstanceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (NullPointerException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }


    @PostMapping
    public ResponseEntity registerCustomer(@RequestBody Customer customer) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(customerService.registerUser(customer));
        } catch (NullPointerException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (InstanceAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(e.getMessage());
        }
    }

    @GetMapping("/location")
    public ResponseEntity findAllLocations(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(customerService.findAllLocation());
        } catch (InstanceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (NullPointerException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/country")
    public ResponseEntity findAllCountries(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(customerService.findAllCountries());
        } catch (InstanceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (NullPointerException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @PostMapping("cart/{id}")
    public ResponseEntity createCartByCustomerId(@RequestBody Cart cart, @PathVariable UUID id){
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(customerService.createCartByCustomerId(cart, id));
        } catch (NullPointerException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (InstanceAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(e.getMessage());
        }
    }

}
