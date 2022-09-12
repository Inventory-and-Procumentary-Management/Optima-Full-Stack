package com.example.backend.controller;

import com.example.backend.model.AppUser;
import com.example.backend.model.Products;
import com.example.backend.service.products.ProductsService;
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
public class ProductController {
    private final ProductsService productsService;

    //getAll
    @GetMapping("/product")
    public ResponseEntity<List<Products>> getProducts(){
        return ResponseEntity.ok().body(productsService.getProducts());
    }
    //get one product
    @GetMapping("/product/{id}")
    public ResponseEntity<Products>getUser(@PathVariable Long id){
        try {
            return new ResponseEntity<Products>(productsService.getProduct(id), HttpStatus.OK);

        } catch (NoSuchElementException e) {
            return new ResponseEntity<Products>(HttpStatus.NOT_FOUND);
        }
    }
    //save product
    @PostMapping("/product/save")
    public ResponseEntity<Products> saveUser(@RequestBody Products products){
        //ServletUriComponentsBuilder.fromCurrentContextPath() = localhost:8080 (path eka denne)
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/product/save").toUriString());
        return ResponseEntity.created(uri).body(productsService.saveProducts(products)); //created(uri) means its gives 201 status
    }
    //delete product
    @DeleteMapping("/product/delete/{id}")
    public String productDelete(@PathVariable Long id){
        productsService.deleteProduct(id);
        return "Deleted Student with id "+id;
    }
    //update product
    @PutMapping("/product/update/{id}")
    public ResponseEntity<Products> update(@RequestBody Products product,@PathVariable Long id){
        try{
//            Student existingStudent = studentService.StudentGet(id);
            productsService.saveProducts(product);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<Products>(HttpStatus.NOT_FOUND);
        }
    }
}
