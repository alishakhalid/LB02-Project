package com.tbz.webshop.domain.cartClothing;

import com.tbz.webshop.domain.cart.Cart;
import com.tbz.webshop.domain.clothing.Clothing;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

import static javax.persistence.FetchType.EAGER;


@Entity
@Table(name = "Cart_Clothing")
@NoArgsConstructor
public class CartClothing {

    @Id
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "uuid2")
    @Column(name = "cart_clothing_id", nullable = false)
    private UUID cartClothing;

    @Column(nullable = false)
    private int amount;

    @ManyToOne(optional = true, cascade = {CascadeType.MERGE, CascadeType.PERSIST}, fetch = EAGER)
    @JoinColumn(name = "id_clothing", updatable = false, insertable = false, nullable = false,
            referencedColumnName = "clothing_id")
    private Clothing clothing;

    @ManyToOne(optional = true, cascade = {CascadeType.MERGE, CascadeType.PERSIST}, fetch = EAGER)
    @JoinColumn(name = "id_cart", updatable = false, insertable = false, nullable = false,
            referencedColumnName = "cart_id")
    private Cart cart;
}
