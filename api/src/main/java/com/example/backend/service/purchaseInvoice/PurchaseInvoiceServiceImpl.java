package com.example.backend.service.purchaseInvoice;

import com.example.backend.model.PurchaseInvoice;
import com.example.backend.repository.PurchaseInvoiceRepository;
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
public class PurchaseInvoiceServiceImpl implements PurchaseInvoiceService {
    private final PurchaseInvoiceRepository purchaseInvoiceRepository;

    public PurchaseInvoice savePurchaseInvoice(PurchaseInvoice purchaseInvoice){
        log.info("Saving purchase invoice {} to the database",purchaseInvoice.getPurchase_invoice_id());
        return purchaseInvoiceRepository.save(purchaseInvoice);
    }
    public List<PurchaseInvoice> getPurchaseInvoices(){
        log.info("Fetching all purchase invoices");
        return purchaseInvoiceRepository.findAll();
    }
    public PurchaseInvoice getPurchaseInvoice(Long id){
        log.info("Get {} purchase invoice from database",id);
        return purchaseInvoiceRepository.findById(id).get();
    }
    public void deletePurchaseInvoice(Long id){
        log.info("Delete purchase invoice");
        purchaseInvoiceRepository.deleteById(id);
    }
    public PurchaseInvoice updatePurchaseInvoice(Long id,PurchaseInvoice purchaseInvoice){
        PurchaseInvoice existingPurchaseInvoice = purchaseInvoiceRepository.findById(id).get();

        if (Objects.nonNull(purchaseInvoice.getDueDate())) {
            existingPurchaseInvoice.setDueDate(purchaseInvoice.getDueDate());
        }
        if (Objects.nonNull(purchaseInvoice.getStatus())) {
            existingPurchaseInvoice.setStatus(purchaseInvoice.getStatus());
        }

        return purchaseInvoiceRepository.save(existingPurchaseInvoice);
    }
    public List<PurchaseInvoice> getPurchaseInvoiceFromSender(Long id){
        log.info("Get purchase invoice from sender");
        return purchaseInvoiceRepository.findAllBySenderId(id);
    }
    public List<PurchaseInvoice> getPurchaseInvoiceFromReceiver(Long id){
        log.info("Get purchase invoice from receiver");
        return purchaseInvoiceRepository.findAllByReceiverId(id);
    }
    public List<PurchaseInvoice> getPurchaseInvoiceFromSupplier(Long id){
        log.info("Get purchase invoice from supplier");
        return purchaseInvoiceRepository.findAllBySupplierId(id);
    }
}
