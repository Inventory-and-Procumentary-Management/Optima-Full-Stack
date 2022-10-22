package com.example.backend.controller;

import com.example.backend.model.OrderProduct;
import com.example.backend.model.Site;
import com.example.backend.service.orderProduct.OrderProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/orderProduct")
@CrossOrigin
@RequiredArgsConstructor
public class OrderProductController {
    private final OrderProductService orderProductService;

    //getAll
    @GetMapping("/")
    public ResponseEntity<List<OrderProduct>> getOrderProduct(){
        return ResponseEntity.ok().body(orderProductService.getOrderProducts());
    }
    //get one order product
    @GetMapping("/{id}")
    public ResponseEntity<OrderProduct>getOrderProduct(@PathVariable Long id){
        try {
            return new ResponseEntity<OrderProduct>(orderProductService.getOrderProduct(id), HttpStatus.OK);

        } catch (NoSuchElementException e) {
            return new ResponseEntity<OrderProduct>(HttpStatus.NOT_FOUND);
        }
    }
    //save order product
    @PostMapping("/save")
    public ResponseEntity<OrderProduct> saveOrderProduct(@RequestBody OrderProduct orderProduct){
        //ServletUriComponentsBuilder.fromCurrentContextPath() = localhost:8080 (path eka denne)
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/orderProduct/save").toUriString());
        return ResponseEntity.created(uri).body(orderProductService.saveOrderProduct(orderProduct)); //created(uri) means its gives 201 status
    }
    //delete order product
    @DeleteMapping("/delete/{id}")
    public String orderProductDelete(@PathVariable Long id){
        orderProductService.deleteOrderProduct(id);
        return "Deleted order product item with id "+id;
    }
    //update order product
    @PutMapping("/update/{id}")
    public ResponseEntity<OrderProduct> orderProductUpdate(@RequestBody OrderProduct orderProduct, @PathVariable Long id){
        try{
            OrderProduct orderProduct_new = orderProductService.updateOrderProduct(id,orderProduct);
            return ResponseEntity.ok().body(orderProduct_new);
        }catch (NoSuchElementException e){
            return new ResponseEntity<OrderProduct>(HttpStatus.NOT_FOUND);
        }
    }
}
