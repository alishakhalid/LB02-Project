package com.tbz.webshop.domain.order;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface OrderRepository extends JpaRepository<Order, UUID> {
    @Query("select o from Order o, Customer c where c.customerId = :customerId")
    Optional<Order> findOrderByCustomerId(@Param("customerId") UUID customerId);
}
