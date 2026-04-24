import { Link } from "react-router-dom";
import Button from "../components/Button";

function HomePage() {
  return (
    <section className="hero-section glass-panel">
      <p className="eyebrow">Student Team Members Management System</p>
      <h1>Manage Your Team Efficiently</h1>
      <p className="subtitle">
        Organize profiles, roles, and member details in one streamlined dashboard built for modern collaboration.
      </p>
      <div className="hero-actions">
        <Link to="/add">
          <Button>Add Member</Button>
        </Link>
        <Link to="/members">
          <Button variant="secondary">View Members</Button>
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
