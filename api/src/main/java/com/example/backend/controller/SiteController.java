package com.example.backend.controller;

import com.example.backend.model.Site;
import com.example.backend.service.site.SiteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/site")
@CrossOrigin
@RequiredArgsConstructor
public class SiteController {
    private final SiteService siteService;

    //Get all
    @GetMapping("/")
    public ResponseEntity<List<Site>> getSites(){
        return ResponseEntity.ok().body(siteService.getSites());
    }
    //get one site
    @GetMapping("/{id}")
    public ResponseEntity<Site>getSite(@PathVariable Long id){
        try {
            return new ResponseEntity<Site>(siteService.getSite(id), HttpStatus.OK);

        } catch (NoSuchElementException e) {
            return new ResponseEntity<Site>(HttpStatus.NOT_FOUND);
        }
    }
    //get site data using user
    @GetMapping("/user/{user_id}")
    public ResponseEntity<List<Site>>getSiteUser(@PathVariable Long user_id){
        return ResponseEntity.ok().body(siteService.getSiteFromUser(user_id));
    }
    //save site
    @PostMapping("/save")
    public ResponseEntity<Site> saveSite(@RequestBody Site site){
        //ServletUriComponentsBuilder.fromCurrentContextPath() = localhost:8080 (path eka denne)
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/site/save").toUriString());
        return ResponseEntity.created(uri).body(siteService.saveSite(site)); //created(uri) means its gives 201 status
    }
    //delete site
    @DeleteMapping("/delete/{id}")
    public String siteDelete(@PathVariable Long id){
        siteService.deleteSite(id);
        return "Deleted site with id "+id;
    }
    //update site
    @PutMapping("/update/{id}")
    public ResponseEntity<Site> siteUpdate(@RequestBody Site site,@PathVariable Long id){
        try{
//            Student existingStudent = studentService.StudentGet(id);
            Site site_New = siteService.updateSite(id,site);
//            return new ResponseEntity<>(HttpStatus.OK);
            return ResponseEntity.ok().body(site_New);
        }catch (NoSuchElementException e){
            return new ResponseEntity<Site>(HttpStatus.NOT_FOUND);
        }
    }
}
