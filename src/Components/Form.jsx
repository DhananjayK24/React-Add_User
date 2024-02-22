import React, { useState } from "react";
import { Data } from "./userData";
import ListUsers from "./ListUsers";
import FormInput from "./FormInput";

const Form = () => {
  const [users, setUsers] = useState(Data);

  return (
    <div className="form-container">
      <h2>
        <center>Form</center>
      </h2>
      <FormInput setUsers={setUsers} users={users} />
      <center>
        <ListUsers users={users} />
      </center>
    </div>
  );
};

export default Form;
