package com.example.backend.controller;

import com.example.backend.model.MaterialRequest;
import com.example.backend.service.materialRequest.MaterialRequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/materialRequest")
@CrossOrigin
@RequiredArgsConstructor
public class MaterialRequestController {
    private final MaterialRequestService materialRequestService;

    //getAll
    @GetMapping("/")
    public ResponseEntity<List<MaterialRequest>> getMaterialRequest(){
        return ResponseEntity.ok().body(materialRequestService.getMaterialRequests());
    }
    //get one material request
    @GetMapping("/{id}")
    public ResponseEntity<MaterialRequest>getMaterialRequest(@PathVariable Long id){
        try {
            return new ResponseEntity<MaterialRequest>(materialRequestService.getMaterialRequest(id), HttpStatus.OK);

        } catch (NoSuchElementException e) {
            return new ResponseEntity<MaterialRequest>(HttpStatus.NOT_FOUND);
        }
    }
    //get material request data using sender
    @GetMapping("/sender/{sender_id}")
    public ResponseEntity<List<MaterialRequest>>getMaterialRequestSender(@PathVariable Long sender_id){
        return ResponseEntity.ok().body(materialRequestService.getMaterialRequestFromSender(sender_id));
    }
    @GetMapping("/receiver/{receiver_id}")
    public ResponseEntity<List<MaterialRequest>>getMaterialRequestReceiver(@PathVariable Long receiver_id){
        return ResponseEntity.ok().body(materialRequestService.getMaterialRequestFromReceiver(receiver_id));
    }
    //save material request
    @PostMapping("/save")
    public ResponseEntity<MaterialRequest> saveMaterialRequest(@RequestBody MaterialRequest materialRequest){
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/materialRequest/save").toUriString());
        return ResponseEntity.created(uri).body(materialRequestService.saveMaterialRequest(materialRequest)); //created(uri) means its gives 201 status
    }
    //delete material request
    @DeleteMapping("/delete/{id}")
    public String materialRequestDelete(@PathVariable Long id){
        materialRequestService.deleteMaterialRequest(id);
        return "Deleted material request item with id "+id;
    }
    //update material request
    @PutMapping("/update/{id}")
    public ResponseEntity<MaterialRequest> materialRequestUpdate(@RequestBody MaterialRequest materialRequest, @PathVariable Long id){
        try{
            MaterialRequest materialRequest_new = materialRequestService.updateMaterialRequest(id,materialRequest);
            return ResponseEntity.ok().body(materialRequest_new);
        }catch (NoSuchElementException e){
            return new ResponseEntity<MaterialRequest>(HttpStatus.NOT_FOUND);
        }
    }
}
