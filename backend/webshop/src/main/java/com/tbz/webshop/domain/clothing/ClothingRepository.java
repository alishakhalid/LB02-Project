package com.tbz.webshop.domain.clothing;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.management.InstanceNotFoundException;
import java.util.List;
import java.util.UUID;

/**
 * The clothing repository executes all CRUD actions on the clothing table.
 */
@Repository
public interface ClothingRepository extends JpaRepository<Clothing, UUID> {
    List<Clothing> findClothingByClothingType(String clothingType) throws NullPointerException, InstanceNotFoundException;

    @Query("select c from Clothing c where c.clothingId =:id")
    Clothing getClothingByClothingId(UUID id);
}
