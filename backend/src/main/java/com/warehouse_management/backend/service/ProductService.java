package com.warehouse_management.backend.service;

import com.warehouse_management.backend.dto.ProductDto;
import java.util.List;

public interface ProductService {

  // Create new product method
  ProductDto createProduct(ProductDto productDto);

  // Get product by ID method
  ProductDto getProductById(Long productId);

  // Get all products method
  List<ProductDto> getAllProducts();

  // Update product by ID method
  ProductDto updateProduct(Long productId, ProductDto newProductDto);

  // Delete product by ID method
  void deleteProduct(Long productId);

}