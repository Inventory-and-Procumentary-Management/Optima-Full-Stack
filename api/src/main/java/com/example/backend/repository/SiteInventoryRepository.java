package com.example.backend.repository;

import com.example.backend.model.SiteInventory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SiteInventoryRepository extends JpaRepository<SiteInventory,Long> {
    List<SiteInventory> findAllByInventoryItemId(Long id);
}
