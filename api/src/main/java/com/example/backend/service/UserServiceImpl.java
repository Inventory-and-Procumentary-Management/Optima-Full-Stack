package com.example.backend.service;

import com.example.backend.model.AppUser;
import com.example.backend.model.UserRole;
import com.example.backend.repository.UserRepository;
import com.example.backend.repository.UserRoleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service @RequiredArgsConstructor @Transactional @Slf4j
public class UserServiceImpl implements UserService, UserDetailsService {
    private final UserRepository userRepo;
    private final UserRoleRepository userRoleRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //this one use for the login
        AppUser appUser = userRepo.findByUsername(username);
        if(appUser == null){
            log.error("User not found in the database");
            throw new UsernameNotFoundException("User not found in the database");
        }else {
            log.info("User found in the database: {}",username);
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        appUser.getRoles().forEach(userRole -> authorities.add(new SimpleGrantedAuthority(userRole.getName())));
        return new org.springframework.security.core.userdetails.User(appUser.getUsername(), appUser.getPassword(), authorities);
    }

    @Override
    public AppUser saveUser(AppUser appUser) {
        log.info("Saving ne user {} to the database",appUser.getUsername());
        appUser.setPassword(passwordEncoder.encode(appUser.getPassword()));
        return userRepo.save(appUser);
    }

    @Override
    public UserRole saveRole(UserRole userRole) {
        log.info("Saving ne role {} to the database",userRole.getName());
        return userRoleRepository.save(userRole);
    }

    @Override
    public void addRoleToUser(String username, String roleName) {
        log.info("Adding role {} to user {}",roleName,username);
        AppUser appUser = userRepo.findByUsername(username);
        UserRole userRole = userRoleRepository.findByName(roleName);
        appUser.getRoles().add(userRole); //previously thibba roles valata aluth role eka append karanava
    }

    @Override
    public AppUser getUser(String username) {
        log.info("Fetching user {}",username);
        return userRepo.findByUsername(username);
    }

    @Override
    public List<AppUser> getUser() {
        log.info("Fetching all users");
        return userRepo.findAll();
    }

    @Override
    public void deleteUser(Long id){
        log.info("Delete user");
        userRepo.deleteById(id);
    };
}
