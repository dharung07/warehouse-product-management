package com.warehouse_management.backend.service.impl;

import com.warehouse_management.backend.dto.ProductDto;
import com.warehouse_management.backend.entity.Product;
import com.warehouse_management.backend.mapper.ProductMapper;
import com.warehouse_management.backend.repository.ProductRepository;
import com.warehouse_management.backend.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {

  // ------ Product Repo -------
  private ProductRepository productRepository;

  // ------ Product Logics -----

  // Logic for create products
  // Save passed 'ProductDto' in a repository as 'Product'
  // Return saved 'Product' to 'ProductDto' back to the client
  @Override
  public ProductDto createProduct(ProductDto productDto) {
    Product product = ProductMapper.mapToProduct(productDto);
    Product savedProduct = productRepository.save(product);

    return ProductMapper.mapToProductDto(savedProduct);
  }

  // Logic for get product by ID from repo and return as DTO
  @Override
  public ProductDto getProductById(Long productId) {
    Product product = productRepository.findById(productId)
            .orElseThrow(
                    () -> new RuntimeException("Product not exist with this " + productId + "id")
            );

    return ProductMapper.mapToProductDto(product);
  }

  // Logic for get all products from repo and return as DTO
  @Override
  public List<ProductDto> getAllProducts() {
    List<Product> products = productRepository.findAll();

    return products.stream().map((product) -> ProductMapper.mapToProductDto(product))
            .collect(Collectors.toList());
  }

  // Logic for update product by ID
  @Override
  public ProductDto updateProduct(Long productId, ProductDto newProductDto) {
    Product product = productRepository.findById(productId)
            .orElseThrow(() -> new RuntimeException("Product not exist for this id : " + productId));

    product.setName(newProductDto.getName());
    product.setCategory(newProductDto.getCategory());
    product.setDescription(newProductDto.getDescription());
    product.setPrice(newProductDto.getPrice());
    product.setQuantity(newProductDto.getQuantity());
    product.setAddedDate(newProductDto.getAddedDate());

    productRepository.save(product);

    return ProductMapper.mapToProductDto(product);
  }

  // Logic for delete a product in DB
  @Override
  public void deleteProduct(Long productId) {
    Product product = productRepository.findById(productId)
            .orElseThrow(() -> new RuntimeException("Product not exist for this id : " + productId));

    productRepository.delete(product);
  }

}
