import { items } from "./items.js";

export function renderItems(list) {
  const container = document.querySelector("#list");

  container.innerHTML = "";

  for (const item of list) {
    const product = document.createElement("li");

    product.classList.add("product");
    product.textContent = item.name;

    container.append(product);
  }
}

export function matching() {
  return items.filter(item => item.category === "stationery");
}

export function start() {
  renderItems(items);

  document.querySelector("#select").addEventListener("click", () => {
    renderItems(matching());
  });
}
