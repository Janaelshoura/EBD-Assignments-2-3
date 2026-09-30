export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);

  return { name, price };
}

export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

export function renderList(items) {
  const list = document.querySelector("#list");

  list.innerHTML = "";

  for (const item of items) {
    const card = document.createElement("li");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = item.name;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `${item.price} EGP`;

    card.append(title, price);
    list.append(card);
  }
}

export function wireForm() {
  const form = document.querySelector("#product-form");
  const error = document.querySelector("#error");

  const items = [];

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { name, price } = readForm();

    if (!name) {
      error.textContent = "Give the product a name.";
      return;
    }

    if (!document.querySelector("#price").value || !Number.isFinite(price) || price <= 0) {
      error.textContent = "Give the product a price.";
      return;
    }

    error.textContent = "";

    items.push({ name, price });
    renderList(items);
    clearForm();
  });
}
wireForm();
