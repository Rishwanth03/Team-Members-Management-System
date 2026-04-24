import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Alert from "../components/Alert";
import Loader from "../components/Loader";
import { getMemberById } from "../services/memberService";

function MemberDetailsPage() {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMember = async () => {
      try {
        setLoading(true);
        const response = await getMemberById(id);
        setMember(response.data);
      } catch (apiError) {
        setError(apiError.response?.data?.message || "Failed to fetch member details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [id]);

  if (loading) return <Loader text="Loading member details..." />;

  if (error) {
    return (
      <section className="page-section">
        <Alert type="error" message={error} />
      </section>
    );
  }

  if (!member) return null;

  return (
    <section className="page-section">
      <article className="details-layout glass-panel">
        <div className="details-image-block">
          {member.imageUrl ? (
            <img src={member.imageUrl} alt={member.name} className="details-image" />
          ) : (
            <div className="avatar-fallback large">{member.name?.charAt(0).toUpperCase()}</div>
          )}
        </div>

        <div className="details-content">
          <h2>{member.name}</h2>
          <p className="role-pill">{member.role}</p>
          <div className="details-grid">
            <div>
              <h4>Email</h4>
              <p>{member.email}</p>
            </div>
            <div>
              <h4>Contact</h4>
              <p>{member.contact}</p>
            </div>
            <div>
              <h4>Additional Info</h4>
              <p>{member.additionalDetails || "No additional details."}</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default MemberDetailsPage;
