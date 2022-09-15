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
        <AddPerson users={users} setUsers={setUsers} />
      </div>
      <ul className="wrapper">
        {users.map((item, index) => (
          <Users
            key={index}
            index={index}
            fname={item.fname}
            gender={item.gender}
            dbirth={item.dbirth}
            email={item.email}
            zipCode={item.zipCode}
            users={users}
            setUsers={setUsers}
            money={item.money}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
