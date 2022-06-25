package com.tbz.webshop.domain.clothing;

import com.tbz.webshop.domain.cart.Cart;

import javax.management.InstanceAlreadyExistsException;
import javax.management.InstanceNotFoundException;
import java.util.List;
import java.util.UUID;

public interface ClothingService {
    List<Clothing> findAllClothings() throws NullPointerException;
    Clothing findClothingById(UUID id) throws InstanceNotFoundException;
    void deleteClothingFromCart(UUID id) throws InstanceNotFoundException;
    Cart addClothingToCart(Cart cart) throws InstanceAlreadyExistsException, NullPointerException;
}
