package com.warehouse_management.backend.repository;

import com.warehouse_management.backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

// Interface which extends to JpaRepository
// to provide DB interactive methods i.e. getById(), findById(), save(), ...

public interface ProductRepository extends JpaRepository<Product,Long> {

}