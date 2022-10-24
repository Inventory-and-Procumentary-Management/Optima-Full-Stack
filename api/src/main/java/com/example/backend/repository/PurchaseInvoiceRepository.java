package com.example.backend.repository;

import com.example.backend.model.PurchaseInvoice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PurchaseInvoiceRepository extends JpaRepository<PurchaseInvoice,Long> {
    List<PurchaseInvoice> findAllBySenderId(Long id);
    List<PurchaseInvoice> findAllByReceiverId(Long id);
    List<PurchaseInvoice> findAllBySupplierId(Long id);
}
