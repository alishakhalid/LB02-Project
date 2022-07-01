package com.tbz.webshop.domain.location;

import com.tbz.webshop.domain.country.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface LocationRepository extends JpaRepository<Location, UUID> {
    Location findByLocationName(String locationName);

}
