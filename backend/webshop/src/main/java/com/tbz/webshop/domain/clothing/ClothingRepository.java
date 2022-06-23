package com.tbz.webshop.domain.clothing;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

/**
 * The clothing repository executes all CRUD actions on the clothing table.
 */
public interface ClothingRepository extends JpaRepository<Clothing, UUID> {
}
