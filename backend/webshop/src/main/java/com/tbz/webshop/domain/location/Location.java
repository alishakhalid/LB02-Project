package com.tbz.webshop.domain.location;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "location")
public class Location {

    @Id
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "uuid2")
    @Column(name = "location_id")
    private UUID locationId;

    @Column(nullable = false, name = "location_name")
    private String locationName;

    @Column(nullable = false, unique = true, name = "postal_code")
        private String postalCode;

}
