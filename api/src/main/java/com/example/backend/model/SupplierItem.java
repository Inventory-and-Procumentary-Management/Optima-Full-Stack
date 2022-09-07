package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SupplierItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long supplier_item_id;
    private Integer price;
    private Integer availableQuantity;
    private Integer discountQuantity;
    private Integer discountAsPercentage;
    @Column(columnDefinition = "boolean default true")
    private Boolean isActivate;
    @Column(columnDefinition = "boolean default false")
    private Boolean isApprove;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date createDate;

    @PrePersist
    private void onCreate() {
        createDate = new Date();
    }
}
