package com.example.backend.repository;

import com.example.backend.model.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRoleRepository extends JpaRepository<UserRole,Long> {
    UserRole findByName(String name);
}
