package com.tbz.webshop.domain.clothing;

import com.tbz.webshop.domain.cart.Cart;
import java.security.Principal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.management.InstanceAlreadyExistsException;
import javax.management.InstanceNotFoundException;
import java.util.UUID;

@RestController
@CrossOrigin("origins")
@RequestMapping(value = {"/clothing"})
public class ClothingController {

    @Autowired
    private ClothingService clothingService;

    /**
     * This is the Endpoint that gets all the clothings items
     * @return either the Endpoint GET with all the clothing items or returns the error message that the clothing item
     * list is empty
     */
    @GetMapping
    public ResponseEntity findAllClothingItems(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(clothingService.findAllClothings());
        } catch (NullPointerException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    /**
     * This is the Endpoint that gets one clothing item by its id
     * @param id of the clothing item
     * @return HTTP status with a exception message if clothing item was not gotten or the
     * clothing item
     */
    @GetMapping("/{id}")
    public ResponseEntity findClothingById(@PathVariable UUID id){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(clothingService.findClothingById(id));
        } catch (InstanceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (NullPointerException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
    @GetMapping("/type/{type}")
    public ResponseEntity findClothingByClothingType(@PathVariable String type){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(clothingService.findClothingByClothingType(type));
        } catch (InstanceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (NullPointerException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    /**
     * This is the Endpoint that is responsible for deleting a clothing item from the database
     *
     * @param id of the clothing item
     * @return either the Endpoint deletes the certain clothing item or returns the error message that the clothing item
     * does not exist
     */
    @DeleteMapping("/{id}")
    public ResponseEntity deleteClothingFromCart(@PathVariable UUID id) {
        try {
            clothingService.deleteClothingFromCart(id);
            return ResponseEntity.ok("Removed item from cart");
        } catch (InstanceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/clothingTypes")
    public ResponseEntity findAllClothingTypes(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(clothingService.findAllClothingTypes());
        }catch (NullPointerException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/clothingSizes")
    public ResponseEntity findAllClothingSizes(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(clothingService.findAllClothingSizes());
        } catch (NullPointerException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/cart")
    public ResponseEntity getCartItemsOfPrincipal(@AuthenticationPrincipal Principal principal){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(clothingService.getCartItems
                (principal));
        } catch (NullPointerException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    /**
     * This is the Endpoint that is responsible for adding a new clothing item to a cart.
     *
     * @param clothingId the information that is needed to add a new item to a cart that is given through the requestBody
     * @return either returns the newly added item or the error message that the item was not added
     */
    @PostMapping(value = "/cart/{id}")
    public ResponseEntity addClothingToCart(@AuthenticationPrincipal Principal principal, UUID id) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(clothingService.addToCartClothing(principal, id));
        } catch (NullPointerException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (InstanceAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(e.getMessage());
        }
    }



}
