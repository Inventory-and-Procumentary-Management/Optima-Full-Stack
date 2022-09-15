package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

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
    private Integer minQuantity = 0;
    private Integer maxQuantity = 0;
    private Integer totalQuantity = 0;
    private Boolean isActivate = true;
    private Boolean isApprove = false;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date createDate;

    @PrePersist
    private void onCreate() {
        createDate = new Date();
    }

//    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    Collection<SupplierItem> supplierItem = new ArrayList<>();

//    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    Collection<Inventory> inventory = new ArrayList<>();
}
