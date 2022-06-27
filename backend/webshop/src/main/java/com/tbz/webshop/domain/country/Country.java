package com.tbz.webshop.domain.country;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "country")
@Getter
@NoArgsConstructor
public class Country {

    @Id
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "uuid2")
    @Column(name = "country_id")
    private UUID countryId;

    @Column(nullable = false, unique = true, name = "country_name")
    private String countryName;

}
