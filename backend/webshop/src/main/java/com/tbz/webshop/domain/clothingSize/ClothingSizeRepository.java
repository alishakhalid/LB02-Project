package com.tbz.webshop.domain.clothingSize;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ClothingSizeRepository extends JpaRepository<ClothingSize, UUID> {
  @Query(value = "select clothingSize from ClothingSize ")
  List<String> findAllClothingSize();
}
