package com.tbz.webshop.domain.clothing;

import javax.management.InstanceAlreadyExistsException;
import javax.management.InstanceNotFoundException;
import java.util.List;
import java.util.UUID;

public interface ClothingService {
    List<Clothing> getAllClothings() throws NullPointerException;
    Clothing getClothingById(UUID id) throws InstanceNotFoundException;
    Clothing createClothing(Clothing clothing) throws InstanceAlreadyExistsException, NullPointerException;
    void deleteClothing(UUID id) throws InstanceNotFoundException;
    Clothing updateClothingById(UUID id, Clothing updatesClothing) throws InstanceNotFoundException, InstanceAlreadyExistsException;

}
