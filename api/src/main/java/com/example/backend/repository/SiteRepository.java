package com.example.backend.repository;

import com.example.backend.model.Site;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SiteRepository extends JpaRepository<Site,Long> {
    List<Site> findAllBySiteManagerId(Long id);
}
