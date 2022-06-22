package com.tbz.webshop.domain.clothing;

import com.tbz.webshop.domain.clothing_size.ClothingSize;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Clothing {

    @Id
    @GeneratedValue
    private int id;

    @Column(nullable = false)
    private String clothing_name;

    @Column(nullable = false)
    private Double clothing_price;

    @Column(nullable = false)
    private String clothing_description;

    @Column(nullable = false)
    private byte[] image;

    @ManyToMany
    @JoinColumn(name = "id")
    @Column(nullable = false)
    private int FK_clothing_Size;
}