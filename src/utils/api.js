const baseUrl = "https://6a17ee3d1878294b597c159c.mockapi.io";

const handleResponse = (res) =>
  res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);

// GET all items
export const getItems = () => {
  return fetch(`${baseUrl}/items`)
    .then(handleResponse)
    .catch((err) => {
      console.error("Failed to fetch items:", err);
      throw err;
    });
};

// CREATE item
export const addItem = (item) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  })
    .then(handleResponse)
    .catch((err) => {
      console.error("Failed to add item:", err);
      throw err;
    });
};

// UPDATE item
export const updateItem = (item) => {
  return fetch(`${baseUrl}/items/${item.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  })
    .then(handleResponse)
    .catch((err) => {
      console.error("Failed to update item:", err);
      throw err;
    });
};

// DELETE item
export const deleteItem = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  })
    .then(handleResponse)
    .catch((err) => {
      console.error("Failed to delete item:", err);
      throw err;
    });
};
