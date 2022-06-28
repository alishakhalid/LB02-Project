package com.tbz.webshop.domain.customer;

import com.tbz.webshop.domain.cart.Cart;
import com.tbz.webshop.domain.clothing.Clothing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, UUID> {
    boolean existsByCustomerEmail(String customerEmail);
    Optional<Customer> findCustomerByCustomerEmail(String customerEmail);
/*
    @Query("select Customer from Customer c where  c.customerEmail= :email AND c.password=:password")
    Customer existsByCredentials(String email, String password);*/
}
