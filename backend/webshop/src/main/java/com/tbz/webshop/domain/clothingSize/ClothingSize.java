package com.tbz.webshop.domain.clothingSize;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name="clothing_size")
@Getter
@NoArgsConstructor
public class ClothingSize {
    @Id
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "uuid2")
    @Column(name = "clothing_size_id")
    private UUID clothingSizeId;

    @Column(nullable = false, name = "clothing_size")
    @Enumerated(EnumType.STRING)
    private ClothingSizeEnum clothingSize;

}
