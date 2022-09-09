package com.example.backend.repository;

import com.example.backend.model.SupplierItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierItemRepository extends JpaRepository<SupplierItem,Long> {
}
