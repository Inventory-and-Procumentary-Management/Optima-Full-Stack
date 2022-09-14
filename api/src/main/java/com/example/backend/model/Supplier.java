package com.example.backend.model;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Objects;
import java.util.Set;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
//@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Supplier")
public class Supplier {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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
    Collection<SupplierContactPerson> supplierContactPerson = new ArrayList<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Supplier supplier = (Supplier) o;
        return supplier_id != null && Objects.equals(supplier_id, supplier.supplier_id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
