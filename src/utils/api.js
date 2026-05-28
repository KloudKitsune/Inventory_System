const baseUrl = "https://6a17ee3d1878294b597c159c.mockapi.io";

const handleResponse = (res) =>
  res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);

// GET all items
export const getItems = () => {
  return fetch(`${baseUrl}/items`).then(handleResponse);
};

// CREATE item
export const addItem = (item) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  }).then(handleResponse);
};

// UPDATE item
export const updateItem = (item) => {
  return fetch(`${baseUrl}/items/${item.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  }).then(handleResponse);
};

// DELETE item
export const deleteItem = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then(handleResponse);
};
