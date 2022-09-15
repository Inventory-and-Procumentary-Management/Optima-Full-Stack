package com.example.backend.repository;

import com.example.backend.model.Dispatch;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DispatchRepository extends JpaRepository<Dispatch,Long> {
    List<Dispatch> findAllBySenderId(Long id);
    List<Dispatch> findAllByReceiverId(Long id);
}
