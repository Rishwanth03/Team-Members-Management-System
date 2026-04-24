import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AddMemberPage from "./pages/AddMemberPage";
import MembersPage from "./pages/MembersPage";
import MemberDetailsPage from "./pages/MemberDetailsPage";

function App() {
  const { pathname } = useLocation();

  const pageClass =
    pathname === "/"
      ? "page-home"
      : pathname === "/add"
      ? "page-add"
      : pathname === "/members"
      ? "page-members"
      : pathname.startsWith("/members/")
      ? "page-member-details"
      : "page-home";

  return (
    <div className={`app-shell ${pageClass}`}>
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      <div className="background-illustration bg-team" aria-hidden="true" />
      <div className="background-illustration bg-students" aria-hidden="true" />
      <div className="grid-overlay" />
      <Navbar />
      <main className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddMemberPage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/members/:id" element={<MemberDetailsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
