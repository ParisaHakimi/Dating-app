import { useState } from "react";
import styles from "../stattic/AddPersonform.module.css";
const AddPerson = ({ users, setUsers }) => {
  const [fname, setFname] = useState("");
  const [gender, setGender] = useState("");
  const [dbirth, setDbirth] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const user = {
      fname: fname,
      gender: gender,
      dbirth: dbirth,
      email: email,
      zipCode: zipCode,
    };
    setUsers([...users, user]);
    setFname("");
    setGender("");
    setDbirth("");
    setEmail("");
    setZipCode("");
  };
  return (
    <form onSubmit={submitHandler}>
      <h2>
        Join it's <span>free!</span>
      </h2>
      <label>
        <span>First name</span>
        <input
          type="text"
          onChange={(e) => setFname(e.target.value)}
          value={fname}
        />
      </label>
      <label>
        <span>Gender</span>
        <input
          type="text"
          onChange={(e) => setGender(e.target.value)}
          value={gender}
        />
      </label>

      <label>
        <span> DOB</span>
        <input
          type="date"
          onChange={(e) => setDbirth(e.target.value)}
          value={dbirth}
        />
      </label>
      <label>
        <span>E-mail</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Zip Code</span>
        <input
          type="number"
          onChange={(e) => setZipCode(e.target.value)}
          value={zipCode}
        />
      </label>
      <input type="submit" value="continue" />
    </form>
  );
};

export default AddPerson;
