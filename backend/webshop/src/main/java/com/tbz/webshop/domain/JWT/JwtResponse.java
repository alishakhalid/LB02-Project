package com.tbz.webshop.domain.JWT;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private UUID id;
    private String email;
    private String password;

    public JwtResponse(String accessToken, UUID id, String email, String password) {
        this.token = accessToken;
        this.id = id;
        this.email = email;
        this.password = password;
    }

}