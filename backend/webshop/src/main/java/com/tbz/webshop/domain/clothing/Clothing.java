package com.tbz.webshop.domain.clothing;

import com.tbz.webshop.domain.clothingSize.ClothingSize;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.UUID;

import static javax.persistence.FetchType.EAGER;

@Entity
@Getter
@Setter
@Table(name = "clothing")
public class Clothing {

    @Id
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "uuid2")
    @Column(name = "clothing_id")
    private UUID clothingId;

    @Column(nullable = false, name = "clothing_name")
    private String clothingName;

    @Column(nullable = false, name = "clothing_price")
    private Double clothingPrice;

    @Column(nullable = false, name = "clothing_type", length = 3)
    @Enumerated(EnumType.STRING)
    private ClothingTypeEnum clothingTypeEnum;

    @Column(nullable = false, name = "clothing_description")
    private String clothingDescription;

    @Column(nullable = false, name = "clothing_image")
    private byte[] clothingImage;

    @ManyToOne(optional = true, cascade = {CascadeType.MERGE, CascadeType.PERSIST}, fetch = EAGER)
    @JoinColumn(name = "id_clothing_size", nullable = false, referencedColumnName = "clothing_size_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private ClothingSize clothingSize;

}