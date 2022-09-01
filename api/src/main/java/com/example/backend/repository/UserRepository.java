package com.example.backend.repository;

import com.example.backend.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<AppUser,Long> {
    AppUser findByUsername(String name);
}
