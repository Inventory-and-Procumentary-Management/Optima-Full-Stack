package com.example.backend.controller;

import com.example.backend.model.Inventory;
import com.example.backend.service.inventory.InventoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/inventory")
@CrossOrigin
@RequiredArgsConstructor
public class InventoryController {
    private final InventoryService inventoryService;

    //getAll
    @GetMapping("/")
    public ResponseEntity<List<Inventory>> getInventory(){
        return ResponseEntity.ok().body(inventoryService.getInventories());
    }
    //get one inventory
    @GetMapping("/{id}")
    public ResponseEntity<Inventory>getInventoryItem(@PathVariable Long id){
        try {
            return new ResponseEntity<Inventory>(inventoryService.getInventory(id), HttpStatus.OK);

        } catch (NoSuchElementException e) {
            return new ResponseEntity<Inventory>(HttpStatus.NOT_FOUND);
        }
    }
    //save inventory
    @PostMapping("/save")
    public ResponseEntity<Inventory> saveSupplierItem(@RequestBody Inventory inventory){
        //ServletUriComponentsBuilder.fromCurrentContextPath() = localhost:8080 (path eka denne)
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/inventory/save").toUriString());
        return ResponseEntity.created(uri).body(inventoryService.saveInventory(inventory)); //created(uri) means its gives 201 status
    }
    //delete inventory
    @DeleteMapping("/delete/{id}")
    public String inventoryDelete(@PathVariable Long id){
        inventoryService.deleteInventory(id);
        return "Deleted supplier item with id "+id;
    }
    //update inventory
    @PutMapping("/update/{id}")
    public ResponseEntity<Inventory> inventoryUpdate(@RequestBody Inventory inventory,@PathVariable Long id){
        try{
//            Student existingStudent = studentService.StudentGet(id);
            Inventory inventory_New = inventoryService.updateInventory(id,inventory);
//            return new ResponseEntity<>(HttpStatus.OK);
            return ResponseEntity.ok().body(inventory_New);
        }catch (NoSuchElementException e){
            return new ResponseEntity<Inventory>(HttpStatus.NOT_FOUND);
        }
    }
}
