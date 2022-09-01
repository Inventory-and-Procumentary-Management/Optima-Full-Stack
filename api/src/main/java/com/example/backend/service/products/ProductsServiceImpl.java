package com.example.backend.service.products;

import com.example.backend.model.Products;
import com.example.backend.repository.ProductRepository;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class ProductsServiceImpl implements ProductsService {
    private final ProductRepository productRepository;

    @Override
    public Products saveProducts(Products product){
        log.info("Saving product {} to the database",product.getTitle());
        return productRepository.save(product);
    };
    @Override
    public List<Products> getProducts(){
        log.info("Fetching all products");
        return productRepository.findAll();
    };
    @Override
    public Products getProduct(Long id){
        log.info("Get {} product from database",id);
        return productRepository.findById(id).get();
    };
    @Override
    public void deleteProduct(Long id){
        log.info("Delete products");
        productRepository.deleteById(id);
    };

//    @Override
//    public Products updateProduct(Long id, Products product) {
//
//        if (productRepository.findById(id).isPresent()){
//            Products existingProduct = productRepository.findById(id).get();
//
//            existingVehicle.setMake(vehicleUpdateDTO.getMake());
//            existingVehicle.setModel(vehicleUpdateDTO.getModel());
//
//            Vehicle updatedVehicle = productRepository.save(existingVehicle);
//
//            return new VehicleQueryDTO(updatedVehicle.getId(), updatedVehicle.getVehicleIdentityNumber(),
//                    updatedVehicle.getMake(), updatedVehicle.getModel());
//        }else{
//            return null;
//        }
//    }
}
