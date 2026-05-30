import "./Inventory.css";

export default function Inventory({
  inventoryItems,
  onDeleteItem,
  onEditItem,
}) {
  console.log(inventoryItems);
  return (
    <main className="inventory">
      <div className="inventory__header">
        <h2 className="inventory__title">Inventory</h2>

        <div className="inventory__actions">
          {/* <input
            type="text"
            placeholder="Search inventory..."
            className="inventory__search"
          /> */}

          {/* <button className="inventory__button">Add Item</button> */}
        </div>
      </div>

      <section className="inventory__table-container">
        <table className="inventory__table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Manufacturer</th>
              <th>SKU</th>
              <th>Model</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {inventoryItems.map((item) => (
              <tr key={item.id} className="inventory__row">
                <td data-label="Product">{item.product}</td>

                <td data-label="Manufacturer">{item.manufacturer}</td>

                <td data-label="SKU">{item.sku}</td>

                <td data-label="Model">{item.model}</td>

                <td data-label="Stock">{item.stock}</td>

                <td data-label="Status">
                  <span
                    className={`inventory__status ${
                      item.stock <= 0
                        ? "inventory__status--out"
                        : item.stock <= 10
                          ? "inventory__status--low-stock"
                          : "inventory__status--in-stock"
                    }`}
                  >
                    {item.stock <= 0
                      ? "Out of Stock"
                      : item.stock <= 10
                        ? "Low Stock"
                        : "In Stock"}
                  </span>
                </td>

                <td className="inventory__row-actions" data-label="Actions">
                  <button
                    className="inventory__edit-button"
                    onClick={() => onEditItem(item)}
                  >
                    Edit
                  </button>

                  <button
                    className="inventory__delete-button"
                    onClick={() => onDeleteItem(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
