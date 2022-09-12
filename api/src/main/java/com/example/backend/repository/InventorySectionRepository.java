package com.example.backend.repository;

import com.example.backend.model.InventorySection;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InventorySectionRepository extends JpaRepository<InventorySection,Long> {
}
