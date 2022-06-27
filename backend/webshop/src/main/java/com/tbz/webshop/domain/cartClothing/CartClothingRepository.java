package com.tbz.webshop.domain.cartClothing;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CartClothingRepository extends JpaRepository<CartClothing, UUID> {
}
