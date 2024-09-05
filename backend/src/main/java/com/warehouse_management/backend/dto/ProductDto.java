package com.warehouse_management.backend.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;

// DTO - Data Transfer Objects

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto {
  private Long id;
  private String name;
  private String category;
  private String description;
  private double price;
  private int quantity;
  private Date addedDate;
}