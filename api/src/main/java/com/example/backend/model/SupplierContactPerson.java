package com.example.backend.model;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
//@NoArgsConstructor
@AllArgsConstructor
@Table(name = "SupplierContactPerson")
public class SupplierContactPerson {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long supplier_contact_id;
    private String name;
    private String phoneNo;

//    @ManyToOne(fetch = FetchType.LAZY, optional = false)
//    @JoinColumn(name = "supplier_id", nullable = false) //foreign key
//    private Supplier supplier;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        SupplierContactPerson that = (SupplierContactPerson) o;
        return supplier_contact_id != null && Objects.equals(supplier_contact_id, that.supplier_contact_id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
