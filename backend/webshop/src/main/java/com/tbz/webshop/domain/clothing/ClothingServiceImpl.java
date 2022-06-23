package com.tbz.webshop.domain.clothing;

import javax.management.InstanceAlreadyExistsException;
import javax.management.InstanceNotFoundException;
import java.util.List;
import java.util.UUID;

public class ClothingServiceImpl implements ClothingService{


    @Override
    public List<Clothing> getAllClothings() throws NullPointerException {
        return null;
    }

    @Override
    public Clothing getClothingById(UUID id) throws InstanceNotFoundException {
        return null;
    }

    @Override
    public Clothing createClothing(Clothing clothing) throws InstanceAlreadyExistsException, NullPointerException {
        return null;
    }

    @Override
    public void deleteClothing(UUID id) throws InstanceNotFoundException {

    }

    @Override
    public Clothing updateClothingById(UUID id, Clothing updatesClothing) throws InstanceNotFoundException, InstanceAlreadyExistsException {
        return null;
    }
}
