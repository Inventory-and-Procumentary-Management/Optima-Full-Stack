package com.example.backend.controller;

import com.example.backend.model.InventorySection;
import com.example.backend.service.inventorySection.InventorySectionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/inventorySection")
@CrossOrigin
@RequiredArgsConstructor
public class InventorySectionController {
    private final InventorySectionService inventorySectionService;

    //getAll
    @GetMapping("/")
    public ResponseEntity<List<InventorySection>> getInventorySections(){
        return ResponseEntity.ok().body(inventorySectionService.getInventorySections());
    }
    //get one supplier
    @GetMapping("/{id}")
    public ResponseEntity<InventorySection>getInventorySection(@PathVariable Long id){
        try {
            return new ResponseEntity<InventorySection>(inventorySectionService.getInventorySection(id), HttpStatus.OK);

        } catch (NoSuchElementException e) {
            return new ResponseEntity<InventorySection>(HttpStatus.NOT_FOUND);
        }
    }
    //save supplier
    @PostMapping("/save")
    public ResponseEntity<InventorySection> saveInventorySection(@RequestBody InventorySection inventorySection){
        //ServletUriComponentsBuilder.fromCurrentContextPath() = localhost:8080 (path eka denne)
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/inventory/save").toUriString());
        return ResponseEntity.created(uri).body(inventorySectionService.saveInventorySection(inventorySection)); //created(uri) means its gives 201 status
    }
    //delete supplier
    @DeleteMapping("/delete/{id}")
    public String inventorySectionDelete(@PathVariable Long id){
        inventorySectionService.deleteInventorySection(id);
        return "Deleted supplier item with id "+id;
    }
    //update supplier
    @PutMapping("/update/{id}")
    public ResponseEntity<InventorySection> inventorySectionUpdate(@RequestBody InventorySection inventorySection,@PathVariable Long id){
        try{
//            Student existingStudent = studentService.StudentGet(id);
            InventorySection inventory_section_New = inventorySectionService.updateInventorySection(id,inventorySection);
//            return new ResponseEntity<>(HttpStatus.OK);
            return ResponseEntity.ok().body(inventory_section_New);
        }catch (NoSuchElementException e){
            return new ResponseEntity<InventorySection>(HttpStatus.NOT_FOUND);
        }
    }
}
