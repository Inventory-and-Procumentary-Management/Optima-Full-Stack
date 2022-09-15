package com.example.backend.controller;

import com.example.backend.model.InventoryItem;
import com.example.backend.model.InventorySection;
import com.example.backend.service.inventoryItem.InventoryItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/inventoryItem")
@CrossOrigin
@RequiredArgsConstructor
public class InventoryItemController {
    private final InventoryItemService inventoryItemService;

    //getAll
    @GetMapping("/")
    public ResponseEntity<List<InventoryItem>> getInventoryItems(@RequestParam String field){
        return ResponseEntity.ok().body(inventoryItemService.getInventoryItems(field));
    }
    //getCount
    @GetMapping("/count")
    public ResponseEntity<Long> getInventoryItemsCount(){
        try {
            return new ResponseEntity<Long>(inventoryItemService.countInventoryItems(), HttpStatus.OK);

        } catch (NoSuchElementException e) {
            return new ResponseEntity<Long>(HttpStatus.NOT_FOUND);
        }
    }
    //get one inventory item
    @GetMapping("/{id}")
    public ResponseEntity<InventoryItem>getInventorySection(@PathVariable Long id){
        try {
            return new ResponseEntity<InventoryItem>(inventoryItemService.getInventoryItem(id), HttpStatus.OK);

        } catch (NoSuchElementException e) {
            return new ResponseEntity<InventoryItem>(HttpStatus.NOT_FOUND);
        }
    }
    //save inventory item
    @PostMapping("/save")
    public ResponseEntity<InventoryItem> saveInventorySection(@RequestBody InventoryItem inventoryItem){
        //ServletUriComponentsBuilder.fromCurrentContextPath() = localhost:8080 (path eka denne)
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/inventoryItem/save").toUriString());
        return ResponseEntity.created(uri).body(inventoryItemService.saveInventoryItems(inventoryItem)); //created(uri) means its gives 201 status
    }
    //delete inventory item
    @DeleteMapping("/delete/{id}")
    public String inventorySectionDelete(@PathVariable Long id){
        inventoryItemService.deleteInventoryItem(id);
        return "Deleted inventory item with id "+id;
    }
    //update inventory item
    @PutMapping("/update/{id}")
    public ResponseEntity<InventoryItem> inventoryItemUpdate(@RequestBody InventoryItem inventoryItem, @PathVariable Long id){
        try{
//            Student existingStudent = studentService.StudentGet(id);
            InventoryItem inventory_item_New = inventoryItemService.updateInventoryItem(id,inventoryItem);
//            return new ResponseEntity<>(HttpStatus.OK);
            return ResponseEntity.ok().body(inventory_item_New);
        }catch (NoSuchElementException e){
            return new ResponseEntity<InventoryItem>(HttpStatus.NOT_FOUND);
        }
    }
}
