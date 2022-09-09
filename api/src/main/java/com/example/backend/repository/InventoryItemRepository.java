package com.example.backend.repository;

import com.example.backend.model.InventoryItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryItemRepository extends JpaRepository<InventoryItem,Long> {
}
