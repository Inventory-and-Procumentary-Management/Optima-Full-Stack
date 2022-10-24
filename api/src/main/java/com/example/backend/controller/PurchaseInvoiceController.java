package com.example.backend.controller;

import com.example.backend.model.PurchaseInvoice;
import com.example.backend.service.purchaseInvoice.PurchaseInvoiceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/purchaseInvoice")
@CrossOrigin
@RequiredArgsConstructor
public class PurchaseInvoiceController {
    private final PurchaseInvoiceService purchaseInvoiceService;

    //getAll
    @GetMapping("/")
    public ResponseEntity<List<PurchaseInvoice>> getPurchaseInvoice(){
        return ResponseEntity.ok().body(purchaseInvoiceService.getPurchaseInvoices());
    }
    //get one purchase invoice
    @GetMapping("/{id}")
    public ResponseEntity<PurchaseInvoice>getPurchaseInvoice(@PathVariable Long id){
        try {
            return new ResponseEntity<PurchaseInvoice>(purchaseInvoiceService.getPurchaseInvoice(id), HttpStatus.OK);

        } catch (NoSuchElementException e) {
            return new ResponseEntity<PurchaseInvoice>(HttpStatus.NOT_FOUND);
        }
    }
    //get purchase invoice data using sender
    @GetMapping("/sender/{sender_id}")
    public ResponseEntity<List<PurchaseInvoice>>getPurchaseInvoiceSender(@PathVariable Long sender_id){
        return ResponseEntity.ok().body(purchaseInvoiceService.getPurchaseInvoiceFromSender(sender_id));
    }
    @GetMapping("/receiver/{receiver_id}")
    public ResponseEntity<List<PurchaseInvoice>>getPurchaseInvoiceReceiver(@PathVariable Long receiver_id){
        return ResponseEntity.ok().body(purchaseInvoiceService.getPurchaseInvoiceFromReceiver(receiver_id));
    }
    @GetMapping("/supplier/{supplier_id}")
    public ResponseEntity<List<PurchaseInvoice>>getPurchaseInvoiceSupplier(@PathVariable Long supplier_id){
        return ResponseEntity.ok().body(purchaseInvoiceService.getPurchaseInvoiceFromSupplier(supplier_id));
    }
    //save purchase invoice
    @PostMapping("/save")
    public ResponseEntity<PurchaseInvoice> savePurchaseInvoice(@RequestBody PurchaseInvoice purchaseInvoice){
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/purchaseInvoice/save").toUriString());
        return ResponseEntity.created(uri).body(purchaseInvoiceService.savePurchaseInvoice(purchaseInvoice)); //created(uri) means its gives 201 status
    }
    //delete purchase invoice
    @DeleteMapping("/delete/{id}")
    public String PurchaseInvoiceDelete(@PathVariable Long id){
        purchaseInvoiceService.deletePurchaseInvoice(id);
        return "Deleted purchase invoice item with id "+id;
    }
    //update purchase invoice
    @PutMapping("/update/{id}")
    public ResponseEntity<PurchaseInvoice> PurchaseInvoiceUpdate(@RequestBody PurchaseInvoice purchaseInvoice, @PathVariable Long id){
        try{
            PurchaseInvoice purchaseInvoice_new = purchaseInvoiceService.updatePurchaseInvoice(id,purchaseInvoice);
            return ResponseEntity.ok().body(purchaseInvoice_new);
        }catch (NoSuchElementException e){
            return new ResponseEntity<PurchaseInvoice>(HttpStatus.NOT_FOUND);
        }
    }
}
