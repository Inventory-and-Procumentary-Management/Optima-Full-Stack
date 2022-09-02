package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String description;
    private String img;
    private String category;
    private String messure;
    private Integer price;
    @Column(columnDefinition = "boolean default true")
    private Boolean inStock;
    @Column(columnDefinition = "integer default 0")
    private Integer quantity;
    @Column(columnDefinition = "boolean default true")
    private Boolean isActivate;
    @Column(columnDefinition = "boolean default false")
    private Boolean isApprove;
    private Date createDate;
    private Integer minimumLevel;
}
