package com.tbz.webshop.domain.clothingSize;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ClothingSizeRepository extends JpaRepository<ClothingSize, UUID> {
}
