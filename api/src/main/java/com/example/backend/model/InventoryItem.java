package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class InventoryItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long inventor_item_id;
    private String title;
    private String description;
    private String img;
    private String category;
    private String uom;
    private Integer minQuantity;
    private Integer maxQuantity;
    private Integer totalQuantity;
}
