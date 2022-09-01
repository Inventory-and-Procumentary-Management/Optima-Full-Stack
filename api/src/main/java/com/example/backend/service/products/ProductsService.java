package com.example.backend.service.products;

import com.example.backend.model.AppUser;
import com.example.backend.model.Products;
import com.example.backend.model.UserRole;

import java.util.List;

public interface ProductsService {
    public Products saveProducts(Products product);
    public List<Products> getProducts();
    public Products getProduct(Long id);
    public void deleteProduct(Long id);
//    public Products updateProduct(Long id,Products product);
}
