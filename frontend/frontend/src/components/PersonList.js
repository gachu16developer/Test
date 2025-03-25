import React, { useEffect, useState } from "react";

const PersonList = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/persons")
      .then((res) => res.json())
      .then((data) => setPersons(data))
      .catch((err) => console.error("Error fetching persons:", err));
  }, []);

  return (
    <div>
      <h2>Persons</h2>
      <ul>
        {persons.map((person) => (
          <li key={person._id}>
            {person.name} - {person.email} - {person.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;
