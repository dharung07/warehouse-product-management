import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/products';

// Get all products REST API
export const listProduct = () => axios.get(REST_API_BASE_URL);

// Add product to DB REST API
export const createProduct = (product) => axios.post(REST_API_BASE_URL, product);

// Get product by ID REST API
export const getProduct = (productId) => axios.get(REST_API_BASE_URL + '/' + productId);

// Update product by ID REST API
export const updateProduct = (productId, product) => {
    axios.put(REST_API_BASE_URL + '/update/' + productId, product);
}

// Delete product by ID REST API
export const deleteProduct = (productId) => axios.delete(REST_API_BASE_URL + '/' + productId);