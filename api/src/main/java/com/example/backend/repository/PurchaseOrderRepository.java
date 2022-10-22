package com.example.backend.repository;

import com.example.backend.model.PurchaseOrder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrder,Long> {
    List<PurchaseOrder> findAllBySenderId(Long id);
    List<PurchaseOrder> findAllByReceiverId(Long id);
    List<PurchaseOrder> findAllBySupplierId(Long id);
}
