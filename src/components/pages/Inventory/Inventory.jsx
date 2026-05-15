import "./Inventory.css";

export default function Inventory() {
  return (
    <main className="inventory">
      <div className="inventory__header">
        <h2 className="inventory__title">Inventory</h2>

        <div className="inventory__actions">
          <input
            type="text"
            placeholder="Search inventory..."
            className="inventory__search"
          />

          <button className="inventory__button">Add Item</button>
        </div>
      </div>

      <section className="inventory__table-container">
        <table className="inventory__table">
          <thead>
            <tr>
              <th>Product</th>
              <th>SKU</th>
              <th>Stock</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Wireless Scanner</td>
              <td>WS-204</td>
              <td>48</td>
              <td>
                <span className="inventory__status inventory__status--in-stock">
                  In Stock
                </span>
              </td>
            </tr>

            <tr>
              <td>Barcode Printer</td>
              <td>BP-102</td>
              <td>6</td>
              <td>
                <span className="inventory__status inventory__status--low-stock">
                  Low Stock
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
