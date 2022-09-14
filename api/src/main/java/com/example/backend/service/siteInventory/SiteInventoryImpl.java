package com.example.backend.service.siteInventory;

import com.example.backend.model.Site;
import com.example.backend.model.SiteInventory;
import com.example.backend.repository.SiteInventoryRepository;
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
public class SiteInventoryImpl implements SiteInventoryService{
    private final SiteInventoryRepository siteInventoryRepository;

    public SiteInventory saveSiteInventory(SiteInventory siteInventory){
        log.info("Saving site inventory item {} to the database",siteInventory.getSite_inventory_id());
        return siteInventoryRepository.save(siteInventory);
    }
    public List<SiteInventory> getSiteInventories(){
        log.info("Fetching all site inventory items");
        return siteInventoryRepository.findAll();
    }
    public SiteInventory getSiteInventory(Long id){
        log.info("Get {} site inventory item from database",id);
        return siteInventoryRepository.findById(id).get();
    }
    public List<SiteInventory> getSiteInventoryFromInventoryItem(Long id){
        log.info("Get site inventory data from inventory item");
        return siteInventoryRepository.findAllByInventoryItemId(id);
    }

    public void deleteSiteInventory(Long id){
        log.info("Delete site inventory item");
        siteInventoryRepository.deleteById(id);
    }
    public SiteInventory updateSiteInventory(Long id,SiteInventory siteInventory){
        SiteInventory existingSiteInventory = siteInventoryRepository.findById(id).get();

        if (Objects.nonNull(siteInventory.getCurrentQuantity())) {
            existingSiteInventory.setCurrentQuantity(siteInventory.getCurrentQuantity());
        }

        return siteInventoryRepository.save(existingSiteInventory);
    }
}
