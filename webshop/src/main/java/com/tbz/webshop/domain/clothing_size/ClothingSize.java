package com.tbz.webshop.domain.clothing_size;

import com.sun.istack.NotNull;

import javax.persistence.*;

@Entity
@Table(name="clothingSize")
public class ClothingSize {
    @Id
    @GeneratedValue
    @OneToMany(mappedBy = "clothingSize")
    private int id;

    @Column(nullable = false)
    private String clothing_size;
}
