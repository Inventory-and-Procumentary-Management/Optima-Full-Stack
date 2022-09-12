package com.example.backend.service.SupplierItem;

import com.example.backend.model.Supplier;
import com.example.backend.model.SupplierItem;
import com.example.backend.repository.SupplierItemRepository;
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
public class SupplierItemServiceImpl implements SupplierItemService{
    private final SupplierItemRepository supplierItemRepository;

    public SupplierItem saveSupplierItem(SupplierItem supplierItem){
        log.info("Saving supplier {} to the database",supplierItem.getIsActivate());
        return supplierItemRepository.save(supplierItem);
    }

    public List<SupplierItem> getSupplierItems(){
        log.info("Fetching all supplier items");
        return supplierItemRepository.findAll();
    }
    public SupplierItem getSupplierItem(Long id){
        log.info("Get {} supplier items from database",id);
        return supplierItemRepository.findById(id).get();
    }
    public void deleteSupplierItem(Long id){
        log.info("Delete supplier items");
        supplierItemRepository.deleteById(id);
    }

    public SupplierItem updateSupplierItem(Long id, SupplierItem supplierItem){
        SupplierItem existingSupplierItem = supplierItemRepository.findById(id).get();

        if (Objects.nonNull(supplierItem.getAvailableQuantity())) {
            existingSupplierItem.setAvailableQuantity(supplierItem.getAvailableQuantity());
        }
        if (Objects.nonNull(supplierItem.getDiscountQuantity())) {
            existingSupplierItem.setDiscountQuantity(supplierItem.getDiscountQuantity());
        }
        if (Objects.nonNull(supplierItem.getDiscountAsPercentage())) {
            existingSupplierItem.setDiscountAsPercentage(supplierItem.getDiscountAsPercentage());
        }
        if (Objects.nonNull(supplierItem.getIsActivate())) {
            existingSupplierItem.setIsActivate(supplierItem.getIsActivate());
        }
        if (Objects.nonNull(supplierItem.getIsApprove())) {
            existingSupplierItem.setIsApprove(supplierItem.getIsApprove());
        }
//        if (Objects.nonNull(supplierItem.getDiscountQuantity()) && !"".equalsIgnoreCase(supplierItem.getDiscountQuantity())) {
//            existingSupplierItem.setDiscountQuantity(supplierItem.getDiscountQuantity());
//        }

        return supplierItemRepository.save(existingSupplierItem);
    }
}
