package com.example.backend.service.inventorySection;

import com.example.backend.model.InventorySection;
import com.example.backend.repository.InventorySectionRepository;
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
public class InventorySectionServiceImpl implements InventorySectionService{
    private final InventorySectionRepository inventorySectionRepository;

    public InventorySection saveInventorySection(InventorySection inventorySection){
        log.info("Saving inventory section {} to the database",inventorySection.getInventory_section_id());
        return inventorySectionRepository.save(inventorySection);
    }
    public List<InventorySection> getInventorySections(){
        log.info("Fetching all inventory sections");
        return inventorySectionRepository.findAll();
    }
    public InventorySection getInventorySection(Long id){
        log.info("Get {} inventory section from database",id);
        return inventorySectionRepository.findById(id).get();
    }
    public void deleteInventorySection(Long id){
        log.info("Delete inventor section");
        inventorySectionRepository.deleteById(id);
    }
    public InventorySection updateInventorySection(Long id,InventorySection inventorySection){
        InventorySection existingInventorySection = inventorySectionRepository.findById(id).get();

        if (Objects.nonNull(inventorySection.getCapacity())) {
            existingInventorySection.setCapacity(inventorySection.getCapacity());
        }
        if (Objects.nonNull(inventorySection.getSectionName()) && !"".equalsIgnoreCase( inventorySection.getSectionName())) {
            existingInventorySection.setSectionName(inventorySection.getSectionName());
        }
        if (Objects.nonNull(inventorySection.getRemainingCapacity())) {
            existingInventorySection.setRemainingCapacity(inventorySection.getRemainingCapacity());
        }
        return inventorySectionRepository.save(existingInventorySection);
    }
}
