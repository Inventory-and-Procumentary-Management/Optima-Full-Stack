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
public class MaterialRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long material_request_id;
    private Long senderId;
    private Long receiverId;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date issueDate;
    private Date dueDate;
    private Boolean status = false;

    @PrePersist
    private void onCreate() {
        issueDate = new Date();
    }

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Collection<OrderProduct> orderProducts = new ArrayList<>();
}
