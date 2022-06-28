package com.tbz.webshop.domain.clothing;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * The clothing repository executes all CRUD actions on the clothing table.
 */
@Repository
public interface ClothingRepository extends JpaRepository<Clothing, UUID> {
}
