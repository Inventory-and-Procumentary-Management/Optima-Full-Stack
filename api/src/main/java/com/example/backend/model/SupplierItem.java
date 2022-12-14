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
public class SupplierItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long supplier_item_id;
    private String ItemName;
    private String Category;
    private String UOM;
    //    private Integer price = 0;
    private Integer price;
    private String description;
    private Integer availableQuantity = 0;
    private Integer discountQuantity = 0;
    private Integer discountAsPercentage = 0;
    //    @Column(columnDefinition = "boolean default true")
    private Boolean isActivate = true;
    //    @Column(columnDefinition = "boolean default false")
    private Integer isApprove = 0;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date createDate;

    @PrePersist
    private void onCreate() {
        createDate = new Date();
    }

    private Long inventor_item_id;

//    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    InventoryItem inventoryItem;
}
