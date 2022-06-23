package com.tbz.webshop.domain.customer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;
import java.util.UUID;

public interface CustomerRepository extends JpaRepository<Customer, UUID> {
    @Query(nativeQuery = true, value = "select * from public.customer where email = ? ")
    Optional<Customer> findByCustomerEmail(String email);
}
