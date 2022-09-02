package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "SupplierContactPerson")
public class SupplierContactPerson {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long supplier_contact_id;
    private String name;
    private String phoneNo;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "supplier_id", nullable = false) //foreign key
    private Supplier supplier;
}
