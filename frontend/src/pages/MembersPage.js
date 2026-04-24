import { useEffect, useState } from "react";
import Alert from "../components/Alert";
import Loader from "../components/Loader";
import MemberCard from "../components/MemberCard";
import { getMembers } from "../services/memberService";

function MembersPage() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        const response = await getMembers();
        setMembers(response.data || []);
      } catch (apiError) {
        setError(apiError.response?.data?.message || "Failed to fetch members.");
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <section className="page-section">
      <div className="section-header">
        <h2>Team Members</h2>
        <p className="section-subtitle">View and manage all registered team profiles.</p>
      </div>

      {loading && <Loader text="Fetching members..." />}
      <Alert type="error" message={error} />

      {!loading && !error && members.length === 0 && (
        <div className="empty-state glass-panel">
          <h3>No members found</h3>
          <p>Start by adding your first team member profile.</p>
        </div>
      )}

      {!loading && !error && members.length > 0 && (
        <div className="members-grid">
          {members.map((member) => (
            <MemberCard key={member._id} member={member} />
          ))}
        </div>
      )}
    </section>
  );
}

export default MembersPage;
