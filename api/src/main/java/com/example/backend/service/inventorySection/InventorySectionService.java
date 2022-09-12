package com.example.backend.service.inventorySection;

import com.example.backend.model.InventorySection;

import java.util.List;

public interface InventorySectionService {
    public InventorySection saveInventorySection(InventorySection inventorySection);
    public List<InventorySection> getInventorySections();
    public InventorySection getInventorySection(Long id);
    public void deleteInventorySection(Long id);
    public InventorySection updateInventorySection(Long id,InventorySection inventorySection);
}
