package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

import static javax.persistence.FetchType.EAGER;

@Entity @Data @NoArgsConstructor @AllArgsConstructor
public class AppUser {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String username;
    private String password;
    private String email;
    private String employeeId;
    private String mobileNumber;
//    private String img;
    @Column(columnDefinition = "boolean default true")
    private Boolean isActivate;
    @ManyToMany(fetch = EAGER) //user kenek load veddi okkoma roles tikath load venna kiyala
    private Collection<UserRole> roles = new ArrayList<>();

}
