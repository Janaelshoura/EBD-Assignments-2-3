import { findAllOrders, findOrder } from "./orders-db.js";

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter(
    order => order.city === "Giza" && order.status === "pending"
  );
}

export function summarize(orders) {
  return orders.reduce((total, order) => total + order.quantity, 0);
}

export async function describeOrder(id) {
  try {
    const order = await findOrder(id);
    return `${order.student} ordered ${order.quantity} x ${order.item}`;
  } catch {
    return `Order ${id} not found`;
  }
}

export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map(order => ({
      item: order.item,
      price: order.price,
    }))
  );
}