package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long order_id;
    private Double discount = 0.0;
    private Double amount = 0.0;
    private Double itemPrice = 0.0;
    private Integer quantity = 0;

    private String itemCode;
    private String productName;
    private String description;

    @Column(nullable = false)
    private Long inventoryItemId;
//    @Column(nullable = false)
//    private Long invoiceId;
//    private Long supplierId;
}
