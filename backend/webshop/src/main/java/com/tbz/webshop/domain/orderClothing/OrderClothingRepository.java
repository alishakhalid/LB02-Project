package com.tbz.webshop.domain.orderClothing;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface OrderClothingRepository extends JpaRepository<OrderClothing, UUID> {
}
