import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const ListPage = () => {
  const [persons, setPersons] = useState([]);
  const navigate = useNavigate();

  const fetchPersons = async () => {
    const res = await axios.get("http://localhost:5000/api/persons");
    setPersons(res.data);
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/persons/${id}`);
    fetchPersons(); 
  };

  return (
    <div>
      <h2>Person List</h2>
      <button onClick={() => navigate("/create")}>+ Create New</button>
      <table border="1" cellPadding="10" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person._id}>
              <td>
                <Link to={`/update/${person._id}`}>{person.name}</Link>
              </td>
              <td>{person.email}</td>
              <td>{person.phone}</td>
              <td>
                <button onClick={() => handleDelete(person._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPage;
