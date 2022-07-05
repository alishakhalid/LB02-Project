package com.tbz.webshop.domain.clothingType;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name="clothing_type")
@Getter
@NoArgsConstructor
public class ClothingType {
    @Id
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "UUID")
    @Column(name = "clothing_type_id")
    private UUID clothingTypeId;

    @Column(nullable = false, name = "clothing_type")
    @Enumerated(EnumType.STRING)
    private ClothingTypeEnum clothingType;

}