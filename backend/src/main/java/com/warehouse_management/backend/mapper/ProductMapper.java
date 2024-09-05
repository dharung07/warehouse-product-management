package com.warehouse_management.backend.mapper;

import com.warehouse_management.backend.dto.ProductDto;
import com.warehouse_management.backend.entity.Product;

// To transport data between Client & Server
// Converts DTOs to product and product to DTOs

public class ProductMapper {

  public static ProductDto mapToProductDto(Product product) {
    return new ProductDto(
            product.getId(),
            product.getName(),
            product.getCategory(),
            product.getDescription(),
            product.getPrice(),
            product.getQuantity(),
            product.getAddedDate()
    );
  }

  public static Product mapToProduct(ProductDto productDto) {
    return new Product(
            productDto.getId(),
            productDto.getName(),
            productDto.getCategory(),
            productDto.getDescription(),
            productDto.getPrice(),
            productDto.getQuantity(),
            productDto.getAddedDate()
    );
  }

}
