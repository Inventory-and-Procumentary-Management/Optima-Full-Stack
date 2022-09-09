package com.example.backend.service.inventory;

import com.example.backend.model.Inventory;
import com.example.backend.model.Supplier;
import com.example.backend.repository.InventoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class InventoryServiceImpl implements InventoryService{
    private final InventoryRepository inventoryRepository;

    public Inventory saveInventory(Inventory inventory){
        log.info("Saving inventory {} to the database",inventory.getInventory_id());
        return inventoryRepository.save(inventory);
    }
    public List<Inventory> getInventories(){
        log.info("Fetching all inventories");
        return inventoryRepository.findAll();
    }
    public Inventory getInventory(Long id){
        log.info("Get {} inventory from database",id);
        return inventoryRepository.findById(id).get();
    }
    public void deleteInventory(Long id){
        log.info("Delete inventories");
        inventoryRepository.deleteById(id);
    }
    public Inventory updateInventory(Long id,Inventory inventory){
        Inventory existingInventory = inventoryRepository.findById(id).get();

        if (Objects.nonNull(inventory.getSectionQuantity())) {
            existingInventory.setSectionQuantity(inventory.getSectionQuantity());
        }
        if (Objects.nonNull(inventory.getReceivedLocation()) && !"".equalsIgnoreCase( inventory.getReceivedLocation())) {
            existingInventory.setReceivedLocation(inventory.getReceivedLocation());
        }
        if (Objects.nonNull(inventory.getExpiredDate())) {
            existingInventory.setExpiredDate(inventory.getExpiredDate());
        }
        return inventoryRepository.save(existingInventory);
    }
}
