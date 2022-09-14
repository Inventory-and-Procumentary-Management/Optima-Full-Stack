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
    private Integer price = 0;
    private Integer availableQuantity = 0;
    private Integer discountQuantity = 0;
    private Integer discountAsPercentage = 0;
//    @Column(columnDefinition = "boolean default true")
    private Boolean isActivate = true;
//    @Column(columnDefinition = "boolean default false")
    private Boolean isApprove = false;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date createDate;

    @PrePersist
    private void onCreate() {
        createDate = new Date();
    }

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    InventoryItem inventoryItem;
}
