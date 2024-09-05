/*
PURPOSE OF ENTITY PACKAGE :
  The entity package contains classes that represent the data model
  or domain objects in this application.
  This class are typically annotated with
  JPA (Java Persistence API) annotations to define
  how this should be mapped to the database tables.
 */

package com.warehouse_management.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Product {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "name", nullable = false)
  private String name;

  @Column(name = "category", nullable = false)
  private String category;

  @Column(name = "description")
  private String description;

  @Column(name = "price", nullable = false)
  private double price;

  @Column(name = "quantity", nullable = false)
  private int quantity;

  @Temporal(TemporalType.DATE)
  private Date addedDate;
}
