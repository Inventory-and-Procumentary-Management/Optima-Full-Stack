package com.example.backend.controller;

import com.example.backend.model.Category;
import com.example.backend.service.categoty.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/category")
@CrossOrigin
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;

    //getAll
    @GetMapping("/")
    public ResponseEntity<List<Category>> getCategory(){
        return ResponseEntity.ok().body(categoryService.getCategories());
    }
    //get one category
    @GetMapping("/{id}")
    public ResponseEntity<Category>getCategoryItem(@PathVariable Long id){
        try {
            return new ResponseEntity<Category>(categoryService.getCategory(id), HttpStatus.OK);

        } catch (NoSuchElementException e) {
            return new ResponseEntity<Category>(HttpStatus.NOT_FOUND);
        }
    }
    //save category
    @PostMapping("/save")
    public ResponseEntity<Category> saveCategoryItem(@RequestBody Category category){
        //ServletUriComponentsBuilder.fromCurrentContextPath() = localhost:8080 (path eka denne)
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/category/save").toUriString());
        return ResponseEntity.created(uri).body(categoryService.saveCategory(category)); //created(uri) means its gives 201 status
    }
    //delete category
    @DeleteMapping("/delete/{id}")
    public String categoryDelete(@PathVariable Long id){
        categoryService.deleteCategory(id);
        return "Deleted supplier item with id "+id;
    }
    //update category
    @PutMapping("/update/{id}")
    public ResponseEntity<Category> categoryUpdate(@RequestBody Category category,@PathVariable Long id){
        try{
//            Student existingStudent = studentService.StudentGet(id);
            Category category_New = categoryService.updateCategory(id,category);
//            return new ResponseEntity<>(HttpStatus.OK);
            return ResponseEntity.ok().body(category_New);
        }catch (NoSuchElementException e){
            return new ResponseEntity<Category>(HttpStatus.NOT_FOUND);
        }
    }
}
