import "./App.css";
import AddPerson from "./components/AddPerson";
import Users from "./components/Users";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  return (
    <div className="App">
      <div className="hero-container">
        <div className="title">
          <h3>for those seeking love and marriage</h3>
          <h1>dating</h1>
        </div>
        <AddPerson />
      </div>
      {users.map((item, i) => (
        <Users />
      ))}
      {/* <Users /> */}
    </div>
  );
}

export default App;
