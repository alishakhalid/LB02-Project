package com.tbz.webshop.domain.orderClothing;

import java.io.Serializable;

public class OrderClothingId implements Serializable {
    private int orderingId;
    private int clothingId;

    public int hashCode(){
        return (orderingId+clothingId);
    }

    public boolean equals(Object object){
        if (object instanceof  OrderClothingId) {
            OrderClothingId otherId = (OrderClothingId) object;
            return (otherId.clothingId ==this.clothingId) && (otherId.orderingId == this.orderingId);
        }
        return false;
    }
}
