package com.example.backend.service.siteInventory;

import com.example.backend.model.SiteInventory;

import java.util.List;

public interface SiteInventoryService {
    public SiteInventory saveSiteInventory(SiteInventory siteInventory);
    public List<SiteInventory> getSiteInventories();
    public SiteInventory getSiteInventory(Long id);
    public void deleteSiteInventory(Long id);
    public SiteInventory updateSiteInventory(Long id,SiteInventory siteInventory);
    public List<SiteInventory> getSiteInventoryFromInventoryItem(Long id);
}
