import StatCard from "../../StatCard/StatCard";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Inventory</h2>

      <div className="dashboard__cards">
        <StatCard
          icon="📦"
          title="Total Items"
          value="1,248"
          change="+12.5% from last month"
          positive={true}
        />

        <StatCard
          icon="⚠️"
          title="Low Stock Items"
          value="23"
          change="-4 from last month"
          positive={false}
        />

        <StatCard
          icon="💰"
          title="Total Value"
          value="$98,450"
          change="+8.3% from last month"
          positive={true}
        />

        <StatCard
          icon="❌"
          title="Out of Stock"
          value="7"
          change="-2 from last month"
          positive={false}
        />
      </div>

      <div className="dashboard__panel">
        <div className="dashboard__panel-header">
          <div className="dashboard__search">
            <input type="text" placeholder="Search projects..." />
          </div>

          <div className="dashboard__actions">
            <button>Filters</button>
            <button>Export</button>
          </div>
        </div>

        <table className="inventory-table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Project ID</th>
              <th>Client</th>
              <th>Progress</th>
              <th>Status</th>
              <th>Budget</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Downtown Office Buildout</td>
              <td>PRJ-1042</td>
              <td>Westview Properties</td>
              <td>78%</td>
              <td>
                <span className="status in-stock">Active</span>
              </td>
              <td>$145,000</td>
            </tr>

            <tr>
              <td>Warehouse Lighting Upgrade</td>
              <td>PRJ-1088</td>
              <td>NorthPoint Logistics</td>
              <td>42%</td>
              <td>
                <span className="status low-stock">Delayed</span>
              </td>
              <td>$62,500</td>
            </tr>

            <tr>
              <td>Retail Store Renovation</td>
              <td>PRJ-1121</td>
              <td>Suncoast Retail Group</td>
              <td>100%</td>
              <td>
                <span className="status completed">Completed</span>
              </td>
              <td>$89,300</td>
            </tr>

            <tr>
              <td>HVAC System Replacement</td>
              <td>PRJ-1150</td>
              <td>Bayline Medical Center</td>
              <td>65%</td>
              <td>
                <span className="status in-stock">Active</span>
              </td>
              <td>$210,000</td>
            </tr>

            <tr>
              <td>Security Camera Installation</td>
              <td>PRJ-1164</td>
              <td>Harbor Industrial</td>
              <td>15%</td>
              <td>
                <span className="status pending">Pending</span>
              </td>
              <td>$34,900</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
