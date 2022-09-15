package com.example.backend.service.purchaseInvoice;

import com.example.backend.model.PurchaseInvoice;
import com.example.backend.model.PurchaseOrder;

import java.util.List;

public interface PurchaseInvoiceService {
    public PurchaseInvoice savePurchaseInvoice(PurchaseInvoice purchaseInvoice);
    public List<PurchaseInvoice> getPurchaseInvoices();
    public PurchaseInvoice getPurchaseInvoice(Long id);
    public void deletePurchaseInvoice(Long id);
    public PurchaseInvoice updatePurchaseInvoice(Long id,PurchaseInvoice purchaseInvoice);
    public List<PurchaseInvoice> getPurchaseInvoiceFromSender(Long id);
    public List<PurchaseInvoice> getPurchaseInvoiceFromReceiver(Long id);
    public List<PurchaseInvoice> getPurchaseInvoiceFromSupplier(Long id);
}
