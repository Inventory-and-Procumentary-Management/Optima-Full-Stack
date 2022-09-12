package com.example.backend.service.inventory;

import com.example.backend.model.Inventory;

import java.util.List;

public interface InventoryService {
    public Inventory saveInventory(Inventory inventory);
    public List<Inventory> getInventories();
    public Inventory getInventory(Long id);
    public void deleteInventory(Long id);
    public Inventory updateInventory(Long id,Inventory inventory);
}
