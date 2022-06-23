package com.tbz.webshop.domain.ordering;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tbz.webshop.domain.customer.Customer;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;


@Entity
@Table(name = "ordering")
public class Ordering {

    @Id
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "uuid2")
    @Column(name = "ordering_id")
    private UUID orderingId;

    @Column(nullable = false, name = "ordering_date")
    private Date orderingDate;

    @Column(nullable = false, name = "ordering_price")
    private double orderingPrice;

    @Column(name = "shipping_price")
    private double shippingPrice;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "customer_id", nullable = false, referencedColumnName = "customer_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Customer customer;


}
