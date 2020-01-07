import React from "react";
import "./Form.css";

export default function Form({ name, setName }) {
  const handleNameChange = ({ target }) => setName(target.value);
  return (
    <div className="form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={handleNameChange} />
    </div>
  );
}
