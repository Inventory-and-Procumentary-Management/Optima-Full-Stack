package com.example.backend.service.supplier;

import com.example.backend.model.Supplier;
import com.example.backend.model.SupplierContactPerson;
import com.example.backend.repository.SupplierContactPersonRepository;
import com.example.backend.repository.SupplierRepository;
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
public class SupplierServiceImpl implements SupplierService {
    private final SupplierRepository supplierRepository;
    private final SupplierContactPersonRepository supplierContactPersonRepo;

    @Override
    public Supplier saveSupplier(Supplier supplier){
        log.info("Saving supplier {} to the database",supplier.getBusinessName());
        return supplierRepository.save(supplier);
    };
    @Override
    public List<Supplier> getSuppliers(){
        log.info("Fetching all products");
        return supplierRepository.findAll();
    };
    @Override
    public Supplier getSupplier(Long id){
        log.info("Get {} product from database",id);
        return supplierRepository.findById(id).get();
    };
    @Override
    public void deleteSupplier(Long id){
        log.info("Delete products");
        supplierRepository.deleteById(id);
    };

    @Override
    public Supplier updateSupplier(Long id, Supplier supplier) {
        Supplier existingSupplier = supplierRepository.findById(id).get();

        if (Objects.nonNull(supplier.getBusinessName()) && !"".equalsIgnoreCase( supplier.getBusinessName())) {
            existingSupplier.setBusinessName(supplier.getBusinessName());
        }
        if (Objects.nonNull(supplier.getAddress()) && !"".equalsIgnoreCase( supplier.getAddress())) {
            existingSupplier.setAddress(supplier.getAddress());
        }
        if (Objects.nonNull(supplier.getBusinessRegisterNo()) && !"".equalsIgnoreCase( supplier.getBusinessRegisterNo())) {
            existingSupplier.setBusinessRegisterNo(supplier.getBusinessRegisterNo());
        }
        if (Objects.nonNull(supplier.getEmail()) && !"".equalsIgnoreCase( supplier.getEmail())) {
            existingSupplier.setEmail(supplier.getEmail());
        }
        if (Objects.nonNull(supplier.getContactNo()) && !"".equalsIgnoreCase( supplier.getContactNo())) {
            existingSupplier.setContactNo(supplier.getContactNo());
        }
        if (Objects.nonNull(supplier.getImg()) && !"".equalsIgnoreCase( supplier.getImg())) {
            existingSupplier.setImg(supplier.getImg());
        }
        if (Objects.nonNull(supplier.getIsActivate())) {
            existingSupplier.setIsActivate(supplier.getIsActivate());
        }

        return supplierRepository.save(existingSupplier);
    }

    public SupplierContactPerson updateSupplierContact(Long id, String name, String phone_no){
        SupplierContactPerson existingSupplierContact = supplierContactPersonRepo.findById(id).get();

        if (Objects.nonNull(name) && !"".equalsIgnoreCase(name)) {
            existingSupplierContact.setName(name);
        }
        if (Objects.nonNull(phone_no) && !"".equalsIgnoreCase(phone_no)) {
            existingSupplierContact.setPhoneNo(phone_no);
        }
        return supplierContactPersonRepo.save(existingSupplierContact);
    }
}
