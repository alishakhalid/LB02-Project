package com.tbz.webshop.domain.customer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, UUID> {
    Optional<Customer> findCustomerByCustomerEmail(String customerEmail);

    Optional<Customer> findByCustomerEmail(String email);
    Boolean existsByCustomerEmail(String email);
}
