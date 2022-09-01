package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Supplier")
public class Supplier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long supplier_id;
    private String businessName;
    private String address;
    private String businessRegisterNo;
    private String email;
    private String contactNo;
    private String img;
    @Column(columnDefinition = "boolean default true")
    private Boolean isActivate;
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<SupplierContactPerson> supplierContactPerson;
}
