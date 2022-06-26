package com.tbz.webshop.domain.customer;

import com.tbz.webshop.domain.cart.Cart;
import com.tbz.webshop.domain.country.Country;
import com.tbz.webshop.domain.location.Location;
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
@Table(name = "customer")
public class Customer {

    @Id
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "uuid2")
    @Column(name = "customer_id")
    private UUID customerId;

    @Column(nullable = false, name = "customer_surname")
    private String customerSurname;

    @Column(nullable = false, name = "customer_lastname")
    private String customerLastname;

    @Column(nullable = false, name = "customer_email")
    private String customerEmail;

    @Column(nullable = false, name = "customer_address")
    private String customerAddress;

    @Column(nullable = false, name = "customer_password")
    private String customerPassword;

    @ManyToOne(optional = true, cascade = {CascadeType.MERGE, CascadeType.PERSIST}, fetch = EAGER)
    @JoinColumn(name = "id_country", nullable = false, referencedColumnName = "country_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Country country;

    @ManyToOne(optional = true, cascade = {CascadeType.MERGE, CascadeType.PERSIST}, fetch = EAGER)
    @JoinColumn(name = "id_location", nullable = false, referencedColumnName = "location_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Location location;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_cart", nullable = false, referencedColumnName = "cart_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Cart cart;

    public Customer(UUID customerId, String customerSurname, String customerLastname, String customerEmail, String customerAddress, String customerPassword, Country country, Location location, Cart cart) {
        this.customerId = customerId;
        this.customerSurname = customerSurname;
        this.customerLastname = customerLastname;
        this.customerEmail = customerEmail;
        this.customerAddress = customerAddress;
        this.customerPassword = customerPassword;
        this.country = country;
        this.location = location;
        this.cart = cart;
    }
}