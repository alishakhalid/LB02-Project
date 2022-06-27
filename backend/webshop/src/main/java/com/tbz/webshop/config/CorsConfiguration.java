package com.tbz.webshop.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 * This is the configuration file used to allow all origins. The paath of the origin
 * needs to get changed when deployment is done
 */
@Configuration
@CrossOrigin(origins = "http://localhost:8080")
public class CorsConfiguration extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //config to permit all the requests

        http.authorizeRequests().anyRequest().permitAll()
                .and()
                .formLogin()
                .and()
                .httpBasic();

    }

}
