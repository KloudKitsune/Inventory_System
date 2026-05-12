import "./StatCard.css";

export default function StatCard({ icon, title, value, change, positive }) {
  return (
    <div className="stat-card">
      <div className="stat-card__icon">{icon}</div>

      <div className="stat-card__content">
        <p className="stat-card__title">{title}</p>

        <h2 className="stat-card__value">{value}</h2>

        <p
          className={
            positive
              ? "stat-card__change positive"
              : "stat-card__change negative"
          }
        >
          {change}
        </p>
      </div>
    </div>
  );
}
