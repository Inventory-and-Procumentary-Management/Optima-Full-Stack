package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Site {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long site_id;
    private String siteName;
    private String siteAddress;
    private String location;
    private Long siteManagerId;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date startDate;
    private Date endDate;

    @PrePersist
    private void onCreate() {
        startDate = new Date();
    }

//    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    AppUser appUser;
}
