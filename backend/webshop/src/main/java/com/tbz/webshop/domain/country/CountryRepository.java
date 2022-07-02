package com.tbz.webshop.domain.country;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CountryRepository extends JpaRepository<Country, UUID> {
    Country findByCountryName(String countryName);

    @Query(value = "SELECT countryName from Country")
    List<String> findAllcountryName();
}
