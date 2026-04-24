import { Link } from "react-router-dom";
import Button from "./Button";

function MemberCard({ member }) {
  return (
    <article className="member-card glass-panel">
      <div className="member-image-wrap">
        {member.imageUrl ? (
          <img src={member.imageUrl} alt={member.name} className="member-image" />
        ) : (
          <div className="avatar-fallback">{member.name?.charAt(0).toUpperCase()}</div>
        )}
      </div>
      <div className="member-content">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
        <Link to={`/members/${member._id}`}>
          <Button variant="secondary">View Details</Button>
        </Link>
      </div>
    </article>
  );
}

export default MemberCard;
