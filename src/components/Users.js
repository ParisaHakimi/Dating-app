import React from "react";
import styles from "../stattic/users.module.css";

const Users = ({ fname, gender, dbirth, email, zipCode }) => {
  return (
    <li className={styles.users}>
      <div className={styles.userInfo}>
        <h3>Name: {fname}</h3>
        <h3>Gender: {gender}</h3>
        <p>DOB: {dbirth}</p>
        <p>E-mail: {email}</p>
        <p>Zip code: {zipCode}</p>
        <p>Likes:</p>
      </div>
      <div className={styles.userBtns}>
        <button className="like">I like </button>
        <button className="money">Give Money</button>
        <button className="dislike">I don't like </button>
        <button className="delete">Delete User</button>
      </div>
    </li>
  );
};

export default Users;
