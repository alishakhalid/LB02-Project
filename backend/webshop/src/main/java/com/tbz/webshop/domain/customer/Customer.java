package com.tbz.webshop.domain.customer;

import com.tbz.webshop.domain.country.Country;
import com.tbz.webshop.domain.customerLogin.CustomerLogin;
import com.tbz.webshop.domain.location.Location;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.UUID;

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

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "country_id", nullable = false, referencedColumnName = "country_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Country country;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "location_id", nullable = false, referencedColumnName = "location_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Location location;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "customer_login_id", nullable = false, referencedColumnName = "customer_login_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private CustomerLogin customerLogin;

}