package com.example.backend.service.categoty;

import com.example.backend.model.Category;

import java.util.List;

public interface CategoryService {
    public Category saveCategory(Category category);
    public List<Category> getCategories();
    public Category getCategory(Long id);
    public void deleteCategory(Long id);
    public Category updateCategory(Long id,Category category);
}
