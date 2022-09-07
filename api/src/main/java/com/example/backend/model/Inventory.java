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
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long inventory_id;
    private Integer sectionQuantity;
    private String receivedLocation;
    private Date expiredDate;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date receivedDate;

    @PrePersist
    private void onCreate() {
        receivedDate = new Date();
    }
}
