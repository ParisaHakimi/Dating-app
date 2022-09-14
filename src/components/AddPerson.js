import { useState } from "react";
import styles from "../stattic/AddPersonform.module.css";
const AddPerson = () => {
  const [gender, setGender] = useState("");
  const [fname, setFname] = useState("");
  const [dbirth, setDbirth] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  return (
    <form>
      <h2>
        Join it's <span>free!</span>
      </h2>
      <label>
        <span> I'm</span>
        <input type="text" onClick={(e) => setGender(e.target.value)} />
      </label>
      <label>
        <span>First name</span>
        <input type="text" onClick={(e) => setFname(e.target.value)} />
      </label>
      <label>
        <span> DOB</span>
        <input type="date" onClick={(e) => setDbirth(e.target.value)} />
      </label>
      <label>
        <span>E-mail</span>
        <input type="email" onClick={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        <span>Zip Code</span>
        <input type="number" onClick={(e) => setZipCode(e.target.value)} />
      </label>
      <input type="submit" value="continue" />
    </form>
  );
};

export default AddPerson;
