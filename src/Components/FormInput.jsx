import React, { useState } from "react";
import addUser from "./addUser";

const FormInput = ({ setUsers, users }) => {
  let [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addUser(name, setUsers, users);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-input">
        <label htmlFor="username">User</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default FormInput;
