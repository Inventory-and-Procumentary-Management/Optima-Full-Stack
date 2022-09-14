package com.example.backend.controller;

import com.example.backend.model.Supplier;
import com.example.backend.model.SupplierContactPerson;
import com.example.backend.model.SupplierItem;
import com.example.backend.service.SupplierItem.SupplierItemService;
import com.example.backend.service.supplier.SupplierService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/supplierItem")
@CrossOrigin
@RequiredArgsConstructor
public class SupplierItemController {
    private final SupplierItemService supplierItemService;

    //getAll
    @GetMapping("/")
    public ResponseEntity<List<SupplierItem>> getSupplierItems(){
        return ResponseEntity.ok().body(supplierItemService.getSupplierItems());
    }
    //get one supplier
    @GetMapping("/{id}")
    public ResponseEntity<SupplierItem>getSupplierItem(@PathVariable Long id){
        try {
            return new ResponseEntity<SupplierItem>(supplierItemService.getSupplierItem(id), HttpStatus.OK);

        } catch (NoSuchElementException e) {
            return new ResponseEntity<SupplierItem>(HttpStatus.NOT_FOUND);
        }
    }
    //save supplier
    @PostMapping("/save")
    public ResponseEntity<SupplierItem> saveSupplierItem(@RequestBody SupplierItem supplierItem){
        //ServletUriComponentsBuilder.fromCurrentContextPath() = localhost:8080 (path eka denne)
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/supplierItem/save").toUriString());
        return ResponseEntity.created(uri).body(supplierItemService.saveSupplierItem(supplierItem)); //created(uri) means its gives 201 status
    }
    //delete supplier
    @DeleteMapping("/delete/{id}")
    public String supplierItemDelete(@PathVariable Long id){
        supplierItemService.deleteSupplierItem(id);
        return "Deleted supplier item with id "+id;
    }
    //update supplier
    @PutMapping("/update/{id}")
    public ResponseEntity<SupplierItem> supplierItemUpdate(@RequestBody SupplierItem supplierItem,@PathVariable Long id){
        try{
//            Student existingStudent = studentService.StudentGet(id);
            SupplierItem supplier_item_new = supplierItemService.updateSupplierItem(id,supplierItem);
//            return new ResponseEntity<>(HttpStatus.OK);
            return ResponseEntity.ok().body(supplier_item_new);
        }catch (NoSuchElementException e){
            return new ResponseEntity<SupplierItem>(HttpStatus.NOT_FOUND);
        }
    }
}
