package com.tbz.webshop.domain.cart;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface CartRepository extends JpaRepository<Cart, UUID> {

    @Query("select c.clothingName, c.clothingPrice, c.clothingDescription, c.clothingSize from Clothing c\n" +
            "join CartClothing cc on c.clothingId = cc.cartClothing\n" +
            "join Cart c2 on c2.cartId = cc.cartClothing\n" +
            "join Customer c3 on c2.cartId = c3.customerId\n" +
            "where c3.customerId = :id")
    Optional<Cart> findCartClothingByCustomer(@Param("id") UUID uuid);
}
