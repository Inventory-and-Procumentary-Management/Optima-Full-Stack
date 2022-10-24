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
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long category_id;
    private String category;

//    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    Collection<InventorySection> inventorySection = new ArrayList<>();
//
//    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    InventoryItem inventoryItem;
//
//    @Temporal(TemporalType.TIMESTAMP)
//    @Column(nullable = false)
//    private Date receivedDate;
//
//    @PrePersist
//    private void onCreate() {
//        receivedDate = new Date();
//    }
}
