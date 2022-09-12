package com.example.backend.service.inventoryItem;

import com.example.backend.model.InventoryItem;

import java.util.List;

public interface InventoryItemService {
    public InventoryItem saveInventoryItems(InventoryItem inventoryItem);
    public List<InventoryItem> getInventoryItems();
    public InventoryItem getInventoryItem(Long id);
    public void deleteInventoryItem(Long id);
    public InventoryItem updateInventoryItem(Long id,InventoryItem inventoryItem);
}
