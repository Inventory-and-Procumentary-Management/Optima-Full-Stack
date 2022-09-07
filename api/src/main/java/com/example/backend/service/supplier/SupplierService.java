package com.example.backend.service.supplier;

import com.example.backend.model.Supplier;
import com.example.backend.model.SupplierContactPerson;

import java.util.List;

public interface SupplierService {
    public Supplier saveSupplier(Supplier supplier);
    public List<Supplier> getSuppliers();
    public Supplier getSupplier(Long id);
    public void deleteSupplier(Long id);
    public Supplier updateSupplier(Long id,Supplier supplier);
    public SupplierContactPerson updateSupplierContact(Long id, String name, String phone_no);
}
