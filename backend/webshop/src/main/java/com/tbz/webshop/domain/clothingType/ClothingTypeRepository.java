package com.tbz.webshop.domain.clothingType;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ClothingTypeRepository extends JpaRepository<ClothingType, UUID> {
}
