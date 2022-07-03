package com.tbz.webshop.domain.clothing;


import com.tbz.webshop.domain.cart.Cart;
import com.tbz.webshop.domain.clothingSize.ClothingSize;
import com.tbz.webshop.domain.clothingSize.ClothingSizeRepository;
import com.tbz.webshop.domain.clothingType.ClothingType;
import com.tbz.webshop.domain.clothingType.ClothingTypeRepository;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import javax.management.InstanceAlreadyExistsException;
import javax.management.InstanceNotFoundException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@NoArgsConstructor
@Transactional
public class ClothingServiceImpl implements ClothingService{

    @Autowired
    private ClothingRepository clothingRepository;
    @Autowired
    private ClothingSizeRepository clothingSizeRepository;
    @Autowired
    private ClothingTypeRepository clothingTypeRepository;


    /**
     * This method is responsible for getting all the clothings itemm from the database
     * @return all the Clothing items with their ids or the matching exception
     * @throws NullPointerException for when the Clothing item list is empty
     */
    @Override
    @Transactional(isolation = Isolation.READ_COMMITTED)
    public List<Clothing> findAllClothings() throws NullPointerException {
        List<Clothing> clothingList = this.clothingRepository.findAll();

        if(!(clothingList.isEmpty() || clothingList == null)){
            return clothingList;
        } else
            throw new NullPointerException("Clothing List is empty");
    }
    /**
     * This method is responsible for getting a specific Clothing item. Calls the method in the clothingRepository that
     * gets the Clothing item with the given ID from the database.
     * @param id Id of the Clothing item that should be displayed
     * @return returns the Clothing item according to the Id
     * @throws InstanceNotFoundException if the given Id does not match an existing Clothing item
     */
    @Override
    public Clothing findClothingById(UUID id) throws InstanceNotFoundException {
        Optional<Clothing> optionalClothing = this.clothingRepository.findById(id);

        if(optionalClothing.isEmpty()) {
            throw new InstanceNotFoundException("Clothing item does not exist");
        }
        return optionalClothing.get();
    }
    /**
     * This method deletes one clothing item by its id and calls the delete method from the clothingRepository.
     *
     * @param id is the identifier for the name of the clothing item which should be deleted
     * @throws InstanceNotFoundException if no clothing item by this id exists
     */
    @Override
    public void deleteClothingFromCart(UUID id) throws InstanceNotFoundException {
        if (!clothingRepository.existsById(id)) {
            throw new InstanceNotFoundException("Clothing item does not exist");
        }
        clothingRepository.deleteById(id);
    }

    //TODO create method?
    @Override
    public Cart addClothingToCart(Cart cart) throws InstanceAlreadyExistsException {
        return null;
    }

    @Override
    public List<ClothingType> findAllClothingTypes() throws NullPointerException {
        List<ClothingType> clothingTypeList = clothingTypeRepository.findAll();
        if(!(clothingTypeList.isEmpty() || clothingTypeList == null)){
            return clothingTypeList;
        } else
            throw new NullPointerException("Clothing Size List is empty");
    }

    @Override
    public List<String> findAllClothingSizes() throws NullPointerException {
        List<String> clothingSizeList = this.clothingSizeRepository.findAllClothingSize();

        if(!(clothingSizeList.isEmpty() || clothingSizeList == null)){
            return clothingSizeList;
        } else
            throw new NullPointerException("Clothing Size List is empty");
    }

    @Override
    public List<Clothing> findClothingByClothingType(String clothingType) throws NullPointerException, InstanceNotFoundException {
        List<Clothing> clothingList = this.clothingRepository.findClothingByClothingType(clothingType);

        if(!(clothingList.isEmpty() || clothingList == null)){
            return clothingList;
        } else
            throw new NullPointerException("Clothing List is empty");
    }
}
