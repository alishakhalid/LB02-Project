package com.tbz.webshop.domain.clothingSize;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ClothingSizeRepository extends JpaRepository<ClothingSize, UUID> {
}
