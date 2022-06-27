package com.tbz.webshop.domain.order;

import com.tbz.webshop.domain.cart.Cart;
import com.tbz.webshop.domain.customer.Customer;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;
import java.util.UUID;

import static javax.persistence.FetchType.EAGER;

@Entity
@Getter
@Setter
@Table(name = "ordering")
@NoArgsConstructor
public class Order {

    @Id
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "uuid2")
    @Column(name = "ordering_id")
    private UUID orderingId;

    @Column(nullable = false, name = "ordering_date")
    private Date orderingDate;

    @Column(nullable = false, name = "ordering_price")
    private double orderingPrice;

    @Column(nullable = false, name = "ordering_time")
    private Time orderingTime;

    @ManyToOne(optional = true, cascade = {CascadeType.MERGE, CascadeType.PERSIST}, fetch = EAGER)
    @JoinColumn(name = "id_customer", nullable = false, referencedColumnName = "customer_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Customer customer;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_cart", nullable = false, referencedColumnName = "cart_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Cart cart;
}
