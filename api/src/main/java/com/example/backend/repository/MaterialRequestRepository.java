package com.example.backend.repository;

import com.example.backend.model.MaterialRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MaterialRequestRepository extends JpaRepository<MaterialRequest,Long> {
    List<MaterialRequest> findAllBySenderId(Long id);
    List<MaterialRequest> findAllByReceiverId(Long id);
}
