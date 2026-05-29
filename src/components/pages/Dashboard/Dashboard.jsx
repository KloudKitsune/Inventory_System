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
            {/* PENDING */}
            {/* <input type="text" placeholder="Search projects..." /> */}
          </div>

          <div className="dashboard__actions">
            {/* <button>Filters</button>
            <button>Export</button> */}
          </div>
        </div>

        <table className="dashboard__table">
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
              <td data-label="Project">Downtown Office Buildout</td>
              <td data-label="Project ID">PRJ-1042</td>
              <td data-label="Client">Westview Properties</td>
              <td data-label="Progress">78%</td>
              <td data-label="Status">
                <span className="status status--active">Active</span>
              </td>
              <td data-label="Budget">$145,000</td>
            </tr>

            <tr>
              <td data-label="Project">Warehouse Lighting Upgrade</td>
              <td data-label="Project ID">PRJ-1088</td>
              <td data-label="Client">NorthPoint Logistics</td>
              <td data-label="Progress">42%</td>
              <td data-label="Status">
                <span className="status status--delayed">Delayed</span>
              </td>
              <td data-label="Budget">$62,500</td>
            </tr>

            <tr>
              <td data-label="Project">Retail Store Renovation</td>
              <td data-label="Project ID">PRJ-1121</td>
              <td data-label="Client">Suncoast Retail Group</td>
              <td data-label="Progress">100%</td>
              <td data-label="Status">
                <span className="status status--completed">Completed</span>
              </td>
              <td data-label="Budget">$89,300</td>
            </tr>

            <tr>
              <td data-label="Project">HVAC System Replacement</td>
              <td data-label="Project ID">PRJ-1150</td>
              <td data-label="Client">Bayline Medical Center</td>
              <td data-label="Progress">65%</td>
              <td data-label="Status">
                <span className="status status--active">Active</span>
              </td>
              <td data-label="Budget">$210,000</td>
            </tr>

            <tr>
              <td data-label="Project">Security Camera Installation</td>
              <td data-label="Project ID">PRJ-1164</td>
              <td data-label="Client">Harbor Industrial</td>
              <td data-label="Progress">15%</td>
              <td data-label="Status">
                <span className="status status--pending">Pending</span>
              </td>
              <td data-label="Budget">$34,900</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
