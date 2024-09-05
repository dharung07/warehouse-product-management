package com.warehouse_management.backend.controller;

import com.warehouse_management.backend.dto.ProductDto;
import com.warehouse_management.backend.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

// REST APIs
@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/products")
public class ProductController {

  private ProductService productService;

  // Create product REST Api
  @PostMapping
  public ResponseEntity<ProductDto> createProduct(@RequestBody ProductDto productDto) {
    ProductDto savedProduct = productService.createProduct(productDto);

    return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
  }

  // Get product by ID REST Api
  @GetMapping("{id}")
  public ResponseEntity<ProductDto> getProductById(@PathVariable("id") Long productId) {
    ProductDto productDto = productService.getProductById(productId);

    return ResponseEntity.ok(productDto);
  }

  // Get all products REST Api
  @GetMapping()
  public ResponseEntity<List<ProductDto>> getAllProducts() {
    List<ProductDto> products = productService.getAllProducts();

    return  ResponseEntity.ok(products);
  }

  // Update product by ID REST Api
  @PutMapping("/update/{id}")
  public ResponseEntity<ProductDto> updateProduct(
          @PathVariable("id") Long productId,
          @RequestBody ProductDto newProductDto) {
    ProductDto productDto = productService.updateProduct(productId,newProductDto);

    return ResponseEntity.ok(productDto);
  }

  // Delete product REST Api
  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteProduct(@PathVariable("id") Long productId) {
    productService.deleteProduct(productId);

    return ResponseEntity.ok("Product with id:" + productId + " is deleted successfully");
  }
}
