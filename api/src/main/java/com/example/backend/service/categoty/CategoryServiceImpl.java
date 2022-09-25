package com.example.backend.service.categoty;

import com.example.backend.model.Category;
import com.example.backend.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class CategoryServiceImpl implements CategoryService{
    private final CategoryRepository categoryRepository;

    public Category saveCategory(Category category){
        log.info("Saving category {} to the database",category.getCategory_id());
        return categoryRepository.save(category);
    }

    @Override
    public List<Category> getCategories() {
        log.info("Fetching all inventories");
        return categoryRepository.findAll();
    }

    public List<Category> getInventories(){
        log.info("Fetching all inventories");
        return categoryRepository.findAll();
    }
    public Category getCategory(Long id){
        log.info("Get {} category from database",id);
        return categoryRepository.findById(id).get();
    }
    public void deleteCategory(Long id){
        log.info("Delete inventories");
        categoryRepository.deleteById(id);
    }

    @Override
    public Category updateCategory(Long id, Category category) {
        return null;
    }
//    public Category updateCategory(Long id,Category category){
//        Category existingCategory = categoryRepository.findById(id).get();
//
//        if (Objects.nonNull(category.getSectionQuantity())) {
//            existingCategory.setSectionQuantity(category.getSectionQuantity());
//        }
//        if (Objects.nonNull(category.getReceivedLocation()) && !"".equalsIgnoreCase( category.getReceivedLocation())) {
//            existingCategory.setReceivedLocation(category.getReceivedLocation());
//        }
//        if (Objects.nonNull(category.getExpiredDate())) {
//            existingCategory.setExpiredDate(category.getExpiredDate());
//        }
//        return categoryRepository.save(existingCategory);
//    }
}
