import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/persons/${id}`).then((res) => {
      setFormData(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/persons/${id}`, formData);
    navigate("/"); 
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Update Person</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} required placeholder="Name" /><br />
        <input name="email" value={formData.email} onChange={handleChange} required placeholder="Email" /><br />
        <input name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone" /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdatePage;
