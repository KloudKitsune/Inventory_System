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
                <td>{item.product}</td>

                <td>{item.manufacturer}</td>

                <td>{item.sku}</td>

                <td>{item.model}</td>

                <td>{item.stock}</td>

                <td>
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

                <td className="inventory__actions">
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
