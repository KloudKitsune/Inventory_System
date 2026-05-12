import StatCard from "../../StatCard/StatCard";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Inventory</h1>

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
    </div>
  );
}
