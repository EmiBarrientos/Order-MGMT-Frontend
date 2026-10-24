import { apiGet, apiPut, apiDelete, apiPost} from "./api/client";

export function getAllOrders() {
  return apiGet("/api/order/with-products");
}

export function getOrderById(id) {
  return apiGet(`/api/order/${id}`);
}

export function createOrder(orderDto) {
  return apiPost("/api/order", orderDto);
}

export function updateOrder(id, orderDto) {
  console.log("Updating order with ID:", id, "and data:", orderDto);
  return apiPut(`/api/order/${id}`, orderDto);
}

export function deleteOrder(id) {
  return apiDelete(`/api/order/${id}`);
}