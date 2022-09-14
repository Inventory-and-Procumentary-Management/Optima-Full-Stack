package com.example.backend.service.site;

import com.example.backend.model.InventoryItem;
import com.example.backend.model.Site;

import java.util.List;

public interface SiteService {
    public Site saveSite(Site site);
    public List<Site> getSites();
    public Site getSite(Long id);
    public void deleteSite(Long id);
    public Site updateSite(Long id,Site site);
    public List<Site> getSiteFromUser(Long id);
}
