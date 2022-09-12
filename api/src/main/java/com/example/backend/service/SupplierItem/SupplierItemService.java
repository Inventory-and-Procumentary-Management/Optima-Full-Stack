package com.example.backend.service.SupplierItem;

import com.example.backend.model.SupplierItem;

import java.util.List;

public interface SupplierItemService {
    public SupplierItem saveSupplierItem(SupplierItem supplierItem);
    public List<SupplierItem> getSupplierItems();
    public SupplierItem getSupplierItem(Long id);
    public void deleteSupplierItem(Long id);
    public SupplierItem updateSupplierItem(Long id, SupplierItem supplierItem);
}
