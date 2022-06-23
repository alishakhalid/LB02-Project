package com.tbz.webshop.domain.orderClothing;

import com.tbz.webshop.domain.clothing.Clothing;
import com.tbz.webshop.domain.ordering.Ordering;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;


@Entity
@Table(name = "Order_Clothing")
@IdClass(OrderClothingId.class)
public class OrderClothing {

    @Id
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "uuid2")
    @Column(name = "clothing_id")
    private UUID clothingId;

    @Id
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "uuid2")
    @Column(name = "ordering_id")
    private UUID orderingId;

    @Column(nullable = false)
    private int amount;

    @ManyToOne
    @JoinColumn(name = "clothing_id", updatable = false, insertable = false,
            referencedColumnName = "clothing_id")

    private Clothing clothing;
    @ManyToOne
    @JoinColumn(name = "ordering_id", updatable = false, insertable = false,
            referencedColumnName = "ordering_id")
    private Ordering ordering;
}
