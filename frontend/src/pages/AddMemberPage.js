import { useMemo, useState } from "react";
import Alert from "../components/Alert";
import Button from "../components/Button";
import Loader from "../components/Loader";
import Toast from "../components/Toast";
import { createMember } from "../services/memberService";

const initialForm = {
  name: "",
  role: "",
  email: "",
  contact: "",
  additionalDetails: "",
};

function AddMemberPage() {
  const [formData, setFormData] = useState(initialForm);
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  const validationErrors = useMemo(() => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.role.trim()) errors.role = "Role is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Enter a valid email address.";
    }
    if (!formData.contact.trim()) errors.contact = "Contact is required.";
    return errors;
  }, [formData]);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onImageChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (Object.keys(validationErrors).length > 0) {
      setError("Please fix the form validation errors before submitting.");
      return;
    }

    try {
      setLoading(true);
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("role", formData.role);
      payload.append("email", formData.email);
      payload.append("contact", formData.contact);
      payload.append("additionalDetails", formData.additionalDetails);
      if (imageFile) payload.append("image", imageFile);

      await createMember(payload);
      setFormData(initialForm);
      setImageFile(null);
      setPreviewUrl("");
      setToast("Member added successfully.");
    } catch (apiError) {
      setError(apiError.response?.data?.message || "Unable to add member.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page-section">
      <Toast message={toast} onClose={() => setToast("")} />
      <div className="form-card glass-panel">
        <h2>Add New Team Member</h2>
        <p className="section-subtitle">Fill in member details and upload a profile image.</p>
        <Alert type="error" message={error} />

        <form className="member-form" onSubmit={handleSubmit} noValidate>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" value={formData.name} onChange={onInputChange} />
            {validationErrors.name && <small>{validationErrors.name}</small>}
          </div>

          <div className="input-group">
            <label htmlFor="role">Role</label>
            <input id="role" name="role" value={formData.role} onChange={onInputChange} />
            {validationErrors.role && <small>{validationErrors.role}</small>}
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={formData.email} onChange={onInputChange} />
            {validationErrors.email && <small>{validationErrors.email}</small>}
          </div>

          <div className="input-group">
            <label htmlFor="contact">Contact</label>
            <input id="contact" name="contact" value={formData.contact} onChange={onInputChange} />
            {validationErrors.contact && <small>{validationErrors.contact}</small>}
          </div>

          <div className="input-group">
            <label htmlFor="additionalDetails">Additional Details</label>
            <textarea
              id="additionalDetails"
              name="additionalDetails"
              rows="4"
              value={formData.additionalDetails}
              onChange={onInputChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="image">Profile Image</label>
            <input id="image" name="image" type="file" accept="image/*" onChange={onImageChange} />
            {previewUrl && <img src={previewUrl} alt="Preview" className="image-preview" />}
          </div>

          <Button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Submit"}
          </Button>
        </form>

        {loading && <Loader text="Saving member profile..." />}
      </div>
    </section>
  );
}

export default AddMemberPage;
