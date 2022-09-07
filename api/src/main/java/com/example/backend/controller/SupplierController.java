package com.example.backend.controller;

import com.example.backend.model.Supplier;
import com.example.backend.model.SupplierContactPerson;
import com.example.backend.service.supplier.SupplierService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api")
@CrossOrigin
@RequiredArgsConstructor
public class SupplierController {
    private final SupplierService supplierService;

    //getAll
    @GetMapping("/supplier")
    public ResponseEntity<List<Supplier>> getSuppliers(){
        return ResponseEntity.ok().body(supplierService.getSuppliers());
    }
    //get one supplier
    @GetMapping("/supplier/{id}")
    public ResponseEntity<Supplier>getSupplier(@PathVariable Long id){
        try {
            return new ResponseEntity<Supplier>(supplierService.getSupplier(id), HttpStatus.OK);

        } catch (NoSuchElementException e) {
            return new ResponseEntity<Supplier>(HttpStatus.NOT_FOUND);
        }
    }
    //save supplier
    @PostMapping("/supplier/save")
    public ResponseEntity<Supplier> saveUser(@RequestBody Supplier supplier){
        //ServletUriComponentsBuilder.fromCurrentContextPath() = localhost:8080 (path eka denne)
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/supplier/save").toUriString());
        return ResponseEntity.created(uri).body(supplierService.saveSupplier(supplier)); //created(uri) means its gives 201 status
    }
    //delete supplier
    @DeleteMapping("/supplier/delete/{id}")
    public String supplierDelete(@PathVariable Long id){
        supplierService.deleteSupplier(id);
        return "Deleted supplier with id "+id;
    }
    //update supplier
    @PutMapping("/supplier/update/{id}")
    public ResponseEntity<Supplier> supplierUpdate(@RequestBody Supplier supplier,@PathVariable Long id){
        try{
//            Student existingStudent = studentService.StudentGet(id);
            Supplier supplier_new = supplierService.updateSupplier(id,supplier);
//            return new ResponseEntity<>(HttpStatus.OK);
            return ResponseEntity.ok().body(supplier_new);
        }catch (NoSuchElementException e){
            return new ResponseEntity<Supplier>(HttpStatus.NOT_FOUND);
        }
    }

//    update supplier contact details
    @PutMapping("/supplierContact/update/{id}")
    public ResponseEntity<SupplierContactPerson> supplierContactUpdate(@RequestBody SupplierContact supplierContact,@PathVariable Long id){
        try{
            SupplierContactPerson supplier_new = supplierService.updateSupplierContact(id,supplierContact.getName(),supplierContact.getPhoneNo());
//            return new ResponseEntity<>(HttpStatus.OK);
            return ResponseEntity.ok().body(supplier_new);
        }catch (NoSuchElementException e){
            return new ResponseEntity<SupplierContactPerson>(HttpStatus.NOT_FOUND);
        }
    }
}

@Data
class SupplierContact {
    private String name;
    private String phoneNo;
}
