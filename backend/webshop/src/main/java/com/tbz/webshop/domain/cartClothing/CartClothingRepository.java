package com.tbz.webshop.domain.cartClothing;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CartClothingRepository extends JpaRepository<CartClothing, UUID> {
}
