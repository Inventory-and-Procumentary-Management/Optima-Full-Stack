package com.example.backend.controller;

import com.example.backend.model.PurchaseOrder;
import com.example.backend.service.purchaseOrder.PurchaseOrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/purchaseOrder")
@CrossOrigin
@RequiredArgsConstructor
public class PurchaseOrderController {
    private final PurchaseOrderService purchaseOrderService;

    //getAll
    @GetMapping("/")
    public ResponseEntity<List<PurchaseOrder>> getPurchaseOrder(){
        return ResponseEntity.ok().body(purchaseOrderService.getPurchaseOrders());
    }
    //get one purchase order
    @GetMapping("/{id}")
    public ResponseEntity<PurchaseOrder>getPurchaseOrder(@PathVariable Long id){
        try {
            return new ResponseEntity<PurchaseOrder>(purchaseOrderService.getPurchaseOrder(id), HttpStatus.OK);

        } catch (NoSuchElementException e) {
            return new ResponseEntity<PurchaseOrder>(HttpStatus.NOT_FOUND);
        }
    }
    //get purchase order data using sender
    @GetMapping("/sender/{sender_id}")
    public ResponseEntity<List<PurchaseOrder>>getPurchaseOrderSender(@PathVariable Long sender_id){
        return ResponseEntity.ok().body(purchaseOrderService.getPurchaseOrderFromSender(sender_id));
    }
    @GetMapping("/receiver/{receiver_id}")
    public ResponseEntity<List<PurchaseOrder>>getPurchaseOrderReceiver(@PathVariable Long receiver_id){
        return ResponseEntity.ok().body(purchaseOrderService.getPurchaseOrderFromReceiver(receiver_id));
    }
    @GetMapping("/supplier/{supplier_id}")
    public ResponseEntity<List<PurchaseOrder>>getPurchaseOrderSupplier(@PathVariable Long supplier_id){
        return ResponseEntity.ok().body(purchaseOrderService.getPurchaseOrderFromSupplier(supplier_id));
    }
    //save purchase order
    @PostMapping("/save")
    public ResponseEntity<PurchaseOrder> savePurchaseOrder(@RequestBody PurchaseOrder purchaseOrder){
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/purchaseOrder/save").toUriString());
        return ResponseEntity.created(uri).body(purchaseOrderService.savePurchaseOrder(purchaseOrder)); //created(uri) means its gives 201 status
    }
    //delete purchase order
    @DeleteMapping("/delete/{id}")
    public String PurchaseOrderDelete(@PathVariable Long id){
        purchaseOrderService.deletePurchaseOrder(id);
        return "Deleted purchase order item with id "+id;
    }
    //update purchase order
    @PutMapping("/update/{id}")
    public ResponseEntity<PurchaseOrder> PurchaseOrderUpdate(@RequestBody PurchaseOrder purchaseOrder, @PathVariable Long id){
        try{
            PurchaseOrder purchaseOrder_new = purchaseOrderService.updatePurchaseOrder(id,purchaseOrder);
            return ResponseEntity.ok().body(purchaseOrder_new);
        }catch (NoSuchElementException e){
            return new ResponseEntity<PurchaseOrder>(HttpStatus.NOT_FOUND);
        }
    }
}
