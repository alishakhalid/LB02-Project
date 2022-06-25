package com.tbz.webshop.domain.clothing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
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
    public ResponseEntity getAllClothingItems(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(clothingService.findAllClothings());
        } catch (NullPointerException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

}
