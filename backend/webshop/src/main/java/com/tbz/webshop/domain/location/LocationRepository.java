package com.tbz.webshop.domain.location;

import com.tbz.webshop.domain.country.Country;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface LocationRepository extends JpaRepository<Location, UUID> {
    Location findByLocationName(String locationName);

    @Query(value = "SELECT locationName from Location")
    List<String> findAllLocationName();

}
