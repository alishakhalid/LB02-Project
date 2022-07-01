package com.tbz.webshop.domain.cart;

import com.tbz.webshop.domain.customer.Customer;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "cart")
@Getter
@Setter
@NoArgsConstructor
public class Cart {

    @Id
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "uuid2")
    @Column(name = "cart_id")
    private UUID cartId;

    @Column(name = "shipping_price")
    private double shippingPrice;

    @Column(name = "total_price", nullable = false)
    private double totalPrice;

    @OneToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "id_customer", nullable = true, referencedColumnName = "customer_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Customer customer;

}
