package com.example.backend.controller;

import com.example.backend.model.SiteInventory;
import com.example.backend.service.siteInventory.SiteInventoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/siteInventory")
@CrossOrigin
@RequiredArgsConstructor
public class SiteInventoryController {
    private final SiteInventoryService siteInventoryService;

    //Get all
    @GetMapping("/")
    public ResponseEntity<List<SiteInventory>> getSiteInventories(){
        return ResponseEntity.ok().body(siteInventoryService.getSiteInventories());
    }
    //get one site inventory
    @GetMapping("/{id}")
    public ResponseEntity<SiteInventory>getSiteInventory(@PathVariable Long id){
        try {
            return new ResponseEntity<SiteInventory>(siteInventoryService.getSiteInventory(id), HttpStatus.OK);

        } catch (NoSuchElementException e) {
            return new ResponseEntity<SiteInventory>(HttpStatus.NOT_FOUND);
        }
    }
    //get one site inventory
    @GetMapping("/inventoryItem/{id}")
    public ResponseEntity<List<SiteInventory>>getSiteInventoryFromInventoryItems(@PathVariable Long id){
        return ResponseEntity.ok().body(siteInventoryService.getSiteInventoryFromInventoryItem(id));
    }
    //save site inventory
    @PostMapping("/save")
    public ResponseEntity<SiteInventory> saveSiteInventory(@RequestBody SiteInventory siteInventory){
        //ServletUriComponentsBuilder.fromCurrentContextPath() = localhost:8080 (path eka denne)
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/siteInventory/save").toUriString());
        return ResponseEntity.created(uri).body(siteInventoryService.saveSiteInventory(siteInventory)); //created(uri) means its gives 201 status
    }
    //delete site inventory
    @DeleteMapping("/delete/{id}")
    public String siteInventoryDelete(@PathVariable Long id){
        siteInventoryService.deleteSiteInventory(id);
        return "Deleted site with id "+id;
    }
    //update site inventory
    @PutMapping("/update/{id}")
    public ResponseEntity<SiteInventory> siteInventoryUpdate(@RequestBody SiteInventory siteInventory,@PathVariable Long id){
        try{
//            Student existingStudent = studentService.StudentGet(id);
            SiteInventory site_inventory_New = siteInventoryService.updateSiteInventory(id,siteInventory);
//            return new ResponseEntity<>(HttpStatus.OK);
            return ResponseEntity.ok().body(site_inventory_New);
        }catch (NoSuchElementException e){
            return new ResponseEntity<SiteInventory>(HttpStatus.NOT_FOUND);
        }
    }
}
