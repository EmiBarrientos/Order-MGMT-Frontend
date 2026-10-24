import { apiGet, apiPost, apiPut, apiDelete } from "./api/client";

export function getAllProducts() {
  return apiGet("/api/product");
}

export function createProduct(product) {
  return apiPost("/api/product", product);
}

export function updateProduct( id, product) {
  return apiPut(`/api/product/${id}`, product);
}

export function deleteProduct(id) {
  return apiDelete(`/api/product/${id}`);
}
