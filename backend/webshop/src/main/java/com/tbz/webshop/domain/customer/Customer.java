package com.tbz.webshop.domain.customer;

import com.tbz.webshop.domain.country.Country;
import com.tbz.webshop.domain.location.Location;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.*;

import static javax.persistence.FetchType.EAGER;

@Entity
@Getter
@Setter
@Table(name = "customer",indexes = {
        @Index(columnList = "customer_email"),
        @Index(columnList = "customer_password")})
@NoArgsConstructor
@AllArgsConstructor
public class Customer  {

    @Id
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "UUID")
    @Column(name = "customer_id")
    private UUID customerId;

    @Column(nullable = false, name = "customer_surname")
    private String customerSurname;

    @Column(nullable = false, name = "customer_lastname")
    private String customerLastname;

    @Email
    @Column(nullable = false, name = "customer_email")
    private String customerEmail;

    @Column(nullable = false, name = "customer_address")
    private String customerAddress;

    @Column(nullable = false, name = "customer_password")
    private String password;

    @ManyToOne(optional = false, cascade = {CascadeType.MERGE, CascadeType.PERSIST}, fetch = EAGER)
    @JoinColumn(name = "id_country", nullable = true, referencedColumnName = "country_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Country country;

    @ManyToOne(optional = false, cascade = {CascadeType.MERGE, CascadeType.PERSIST}, fetch = EAGER)
    @JoinColumn(name = "id_location", nullable = true, referencedColumnName = "location_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Location location;

    public Customer(String customerSurname, String customerLastname, String customerEmail, String customerAddress, String password, Country country, Location location) {
        this.customerSurname = customerSurname;
        this.customerLastname = customerLastname;
        this.customerEmail = customerEmail;
        this.customerAddress = customerAddress;
        this.password = password;
        this.country = country;
        this.location = location;
    }
}