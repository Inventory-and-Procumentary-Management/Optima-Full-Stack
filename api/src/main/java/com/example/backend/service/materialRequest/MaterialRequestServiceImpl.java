package com.example.backend.service.materialRequest;

import com.example.backend.model.MaterialRequest;
import com.example.backend.repository.MaterialRequestRepository;
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
public class MaterialRequestServiceImpl implements MaterialRequestService{
    private final MaterialRequestRepository materialRequestRepository;

    public MaterialRequest saveMaterialRequest(MaterialRequest materialRequest){
        log.info("Saving material request {} to the database",materialRequest.getMaterial_request_id());
        return materialRequestRepository.save(materialRequest);
    }
    public List<MaterialRequest> getMaterialRequests(){
        log.info("Fetching all material requests");
        return materialRequestRepository.findAll();
    }
    public MaterialRequest getMaterialRequest(Long id){
        log.info("Get {} material request from database",id);
        return materialRequestRepository.findById(id).get();
    }
    public List<MaterialRequest> getMaterialRequestFromSender(Long id){
        log.info("Get material request data from sender");
        return materialRequestRepository.findAllBySenderId(id);
    }
    public List<MaterialRequest> getMaterialRequestFromReceiver(Long id){
        log.info("Get material request data from receiver");
        return materialRequestRepository.findAllByReceiverId(id);
    }
    public void deleteMaterialRequest(Long id){
        log.info("Delete material request");
        materialRequestRepository.deleteById(id);
    }
    public MaterialRequest updateMaterialRequest(Long id,MaterialRequest materialRequest){
        MaterialRequest existingMaterialRequest = materialRequestRepository.findById(id).get();

        if (Objects.nonNull(materialRequest.getDueDate())) {
            existingMaterialRequest.setDueDate(materialRequest.getDueDate());
        }
        if (Objects.nonNull(materialRequest.getStatus())) {
            existingMaterialRequest.setStatus(materialRequest.getStatus());
        }

        return materialRequestRepository.save(existingMaterialRequest);
    }
}
