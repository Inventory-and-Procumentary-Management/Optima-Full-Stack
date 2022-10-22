package com.example.backend.service.materialRequest;

import com.example.backend.model.MaterialRequest;

import java.util.List;

public interface MaterialRequestService {
    public MaterialRequest saveMaterialRequest(MaterialRequest materialRequest);
    public List<MaterialRequest> getMaterialRequests();
    public MaterialRequest getMaterialRequest(Long id);
    public void deleteMaterialRequest(Long id);
    public MaterialRequest updateMaterialRequest(Long id,MaterialRequest materialRequest);
    public List<MaterialRequest> getMaterialRequestFromSender(Long id);
    public List<MaterialRequest> getMaterialRequestFromReceiver(Long id);
}
