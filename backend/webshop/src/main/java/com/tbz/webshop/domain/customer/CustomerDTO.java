package com.tbz.webshop.domain.customer;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerDTO {

    private String customerSurname;

    private String customerLastname;

    private String customerEmail;

    private String customerAddress;

    private String password;

    private String country;

    private String location;
}
