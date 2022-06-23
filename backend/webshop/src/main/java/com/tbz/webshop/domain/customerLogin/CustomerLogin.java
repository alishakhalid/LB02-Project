package com.tbz.webshop.domain.customerLogin;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "customer_login")
@Getter
@Setter
public class CustomerLogin {

    @Id
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "uuid2")
    @Column(name = "customer_login_id")
    private UUID customerLoginId;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, name = "username", unique = true)
    private String username;

}
