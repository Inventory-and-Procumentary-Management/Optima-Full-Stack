package com.example.backend.service;

import com.example.backend.model.AppUser;
import com.example.backend.model.UserRole;

import java.util.List;

public interface UserService {
    AppUser saveUser(AppUser appUser);
    UserRole saveRole(UserRole userRole);
    void addRoleToUser(String username, String roleName);
    AppUser getUser(String username);
    List<AppUser> getUser();

    public void deleteUser(Long id);
}
