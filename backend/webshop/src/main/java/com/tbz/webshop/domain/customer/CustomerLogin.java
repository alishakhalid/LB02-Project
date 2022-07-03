package com.tbz.webshop.domain.customer;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Setter
@Getter
public class CustomerLogin {
    @NotBlank
    private String customerEmail;

    @NotBlank
    private String password;

}
