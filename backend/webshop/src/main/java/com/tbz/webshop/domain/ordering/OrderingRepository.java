package com.tbz.webshop.domain.ordering;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface OrderingRepository extends JpaRepository<Ordering, UUID> {
}
