package com.example.backend.service.purchaseOrder;

import com.example.backend.model.PurchaseOrder;
import com.example.backend.repository.PurchaseOrderRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class PurchaseOrderServiceImpl implements PurchaseOrderService{
    private final PurchaseOrderRepository purchaseOrderRepository;

    public PurchaseOrder savePurchaseOrder(PurchaseOrder purchaseOrder){
        log.info("Saving Purchase Order {} to the database",purchaseOrder.getPurchase_order_id());
        return purchaseOrderRepository.save(purchaseOrder);
    }
    public List<PurchaseOrder> getPurchaseOrders(){
        log.info("Fetching all Purchase Orders");
        return purchaseOrderRepository.findAll();
    }
    public PurchaseOrder getPurchaseOrder(Long id){
        log.info("Get {} Purchase Order from database",id);
        return purchaseOrderRepository.findById(id).get();
    }
    public void deletePurchaseOrder(Long id){
        log.info("Delete Purchase Order");
        purchaseOrderRepository.deleteById(id);
    }
    public PurchaseOrder updatePurchaseOrder(Long id,PurchaseOrder purchaseOrder){
        PurchaseOrder existingPurchaseOrder = purchaseOrderRepository.findById(id).get();

        if (Objects.nonNull(purchaseOrder.getDueDate())) {
            existingPurchaseOrder.setDueDate(purchaseOrder.getDueDate());
        }
        if (Objects.nonNull(purchaseOrder.getStatus())) {
            existingPurchaseOrder.setStatus(purchaseOrder.getStatus());
        }

        return purchaseOrderRepository.save(existingPurchaseOrder);
    }
    public List<PurchaseOrder> getPurchaseOrderFromSender(Long id){
        log.info("Get purchase order from sender");
        return purchaseOrderRepository.findAllBySenderId(id);
    }
    public List<PurchaseOrder> getPurchaseOrderFromReceiver(Long id){
        log.info("Get purchase order from receiver");
        return purchaseOrderRepository.findAllByReceiverId(id);
    }
    public List<PurchaseOrder> getPurchaseOrderFromSupplier(Long id){
        log.info("Get purchase order from supplier");
        return purchaseOrderRepository.findAllBySupplierId(id);
    }
}
