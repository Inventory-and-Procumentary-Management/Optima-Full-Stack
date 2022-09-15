package com.example.backend.service.purchaseOrder;

import com.example.backend.model.Dispatch;
import com.example.backend.model.PurchaseOrder;

import java.util.List;

public interface PurchaseOrderService {
    public PurchaseOrder savePurchaseOrder(PurchaseOrder purchaseOrder);
    public List<PurchaseOrder> getPurchaseOrders();
    public PurchaseOrder getPurchaseOrder(Long id);
    public void deletePurchaseOrder(Long id);
    public PurchaseOrder updatePurchaseOrder(Long id,PurchaseOrder purchaseOrder);
    public List<PurchaseOrder> getPurchaseOrderFromSender(Long id);
    public List<PurchaseOrder> getPurchaseOrderFromReceiver(Long id);
    public List<PurchaseOrder> getPurchaseOrderFromSupplier(Long id);
}
