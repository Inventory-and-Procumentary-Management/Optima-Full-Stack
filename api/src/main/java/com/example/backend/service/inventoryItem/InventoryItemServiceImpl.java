package com.example.backend.service.inventoryItem;

import com.example.backend.model.InventoryItem;
import com.example.backend.repository.InventoryItemRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class InventoryItemServiceImpl implements InventoryItemService{
    private final InventoryItemRepository inventoryItemRepository;

    public InventoryItem saveInventoryItems(InventoryItem inventoryItem){
        log.info("Saving inventory item {} to the database",inventoryItem.getInventor_item_id());
        return inventoryItemRepository.save(inventoryItem);
    }
    public List<InventoryItem> getInventoryItems(String field){
        log.info("Fetching all inventory items");
//        return inventoryItemRepository.findAll(Sort.by(Sort.Direction.ASC, field));
        return inventoryItemRepository.findAll(Sort.by(Sort.Direction.DESC, field));
    }
    public InventoryItem getInventoryItem(Long id){
        log.info("Get {} inventory item from database",id);
        return inventoryItemRepository.findById(id).get();
    }
    public void deleteInventoryItem(Long id){
        log.info("Delete inventory item");
        inventoryItemRepository.deleteById(id);
    }
    public InventoryItem updateInventoryItem(Long id,InventoryItem inventoryItem){
        InventoryItem existingInventoryItem = inventoryItemRepository.findById(id).get();

        if (Objects.nonNull(inventoryItem.getTitle()) && !"".equalsIgnoreCase( inventoryItem.getTitle())) {
            existingInventoryItem.setTitle(inventoryItem.getTitle());
        }
        if (Objects.nonNull(inventoryItem.getDescription()) && !"".equalsIgnoreCase( inventoryItem.getDescription())) {
            existingInventoryItem.setDescription(inventoryItem.getDescription());
        }
        if (Objects.nonNull(inventoryItem.getImg()) && !"".equalsIgnoreCase( inventoryItem.getImg())) {
            existingInventoryItem.setImg(inventoryItem.getImg());
        }
        if (Objects.nonNull(inventoryItem.getCategory()) && !"".equalsIgnoreCase( inventoryItem.getCategory())) {
            existingInventoryItem.setCategory(inventoryItem.getCategory());
        }
        if (Objects.nonNull(inventoryItem.getUom()) && !"".equalsIgnoreCase( inventoryItem.getUom())) {
            existingInventoryItem.setUom(inventoryItem.getUom());
        }
        if (Objects.nonNull(inventoryItem.getMinQuantity()) && !inventoryItem.getMinQuantity().equals(0)) {
            existingInventoryItem.setMinQuantity(inventoryItem.getMinQuantity());
        }
        if (Objects.nonNull(inventoryItem.getMaxQuantity()) && !inventoryItem.getMaxQuantity().equals(0)) {
            existingInventoryItem.setMaxQuantity(inventoryItem.getMaxQuantity());
        }
        if (Objects.nonNull(inventoryItem.getTotalQuantity()) && !inventoryItem.getTotalQuantity().equals(0)) {
            existingInventoryItem.setTotalQuantity(inventoryItem.getTotalQuantity());
        }
        if (Objects.nonNull(inventoryItem.getIsActivate())) {
            existingInventoryItem.setIsActivate(inventoryItem.getIsActivate());
        }
        if (Objects.nonNull(inventoryItem.getIsApprove())) {
            existingInventoryItem.setIsApprove(inventoryItem.getIsApprove());
        }

        return inventoryItemRepository.save(existingInventoryItem);
    }

    public Long countInventoryItems(){
        return inventoryItemRepository.count();
    }
}
