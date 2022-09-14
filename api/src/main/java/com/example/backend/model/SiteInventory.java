package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SiteInventory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long site_inventory_id;
    private Integer currentQuantity = 0;
    @Column(nullable = false)
    private Long inventoryItemId;

//    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    InventoryItem inventoryItem;
}
