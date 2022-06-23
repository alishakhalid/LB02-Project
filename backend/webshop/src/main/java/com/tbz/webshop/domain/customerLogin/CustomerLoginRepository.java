package com.tbz.webshop.domain.customerLogin;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CustomerLoginRepository extends JpaRepository<CustomerLogin, UUID> {
}
