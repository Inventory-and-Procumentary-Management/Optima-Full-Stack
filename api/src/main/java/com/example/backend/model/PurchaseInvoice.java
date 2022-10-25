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
public class PurchaseInvoice {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long purchase_invoice_id;
    private Long senderId;
    private Long receiverId;

    private String senderName;
    private String receiverName;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date issueDate;
    private Date dueDate;
    private Boolean status;

    @Column(nullable = false)
    private Long supplierId;

    @PrePersist
    private void onCreate() {
        issueDate = new Date();
    }

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Collection<OrderProduct> orderProducts = new ArrayList<>();
}
