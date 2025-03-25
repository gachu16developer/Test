import React, { useState } from "react";

const PersonForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} value={formData.name} required />
      <input name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
      <input name="phone" placeholder="Phone" onChange={handleChange} value={formData.phone} required />
      <button type="submit">Save</button>
    </form>
  );
};

export default PersonForm;
