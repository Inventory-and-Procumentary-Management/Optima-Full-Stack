package com.example.backend.service.site;

import com.example.backend.model.Site;
import com.example.backend.repository.SiteRepository;
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
public class SiteServiceImpl implements SiteService{
    private final SiteRepository siteRepository;

    public Site saveSite(Site site){
        log.info("Saving site {} to the database",site.getSite_id());
        return siteRepository.save(site);
    }
    public List<Site> getSites(){
        log.info("Fetching all sites");
        return siteRepository.findAll();
    }
    public Site getSite(Long id){
        log.info("Get {} site from database",id);
        return siteRepository.findById(id).get();
    }
    public List<Site> getSiteFromUser(Long id){
        log.info("Get site data from user");
        return siteRepository.findAllBySiteManagerId(id);
    }

    public void deleteSite(Long id){
        log.info("Delete site");
        siteRepository.deleteById(id);
    }
    public Site updateSite(Long id,Site site){
        Site existingSite = siteRepository.findById(id).get();

        if (Objects.nonNull(site.getSiteName()) && !"".equalsIgnoreCase( site.getSiteName())) {
            existingSite.setSiteName(site.getSiteName());
        }
        if (Objects.nonNull(site.getSiteAddress()) && !"".equalsIgnoreCase( site.getSiteAddress())) {
            existingSite.setSiteAddress(site.getSiteAddress());
        }
        if (Objects.nonNull(site.getLocation()) && !"".equalsIgnoreCase( site.getLocation())) {
            existingSite.setLocation(site.getLocation());
        }
        if (Objects.nonNull(site.getEndDate())) {
            existingSite.setEndDate(site.getEndDate());
        }

        return siteRepository.save(existingSite);
    }
}
