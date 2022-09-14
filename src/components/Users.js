import React from "react";
import styles from "../stattic/users.module.css";

const Users = () => {
  return (
    <ul className={styles.wrapper}>
      <li className={styles.users}>
        <div className={styles.userInfo}>
          <h3>I'm:</h3>
          <h3>Name:</h3>
          <p>DOB:</p>
          <p>E-mail:</p>
          <p>Zip code:</p>
          <p>Likes:</p>
        </div>
        <div className={styles.userBtns}>
          <button className="like">I like </button>
          <button className="money">Give Money</button>
          <button className="dislike">I don't like </button>
          <button className="delete">Delete User</button>
        </div>
      </li>
    </ul>
  );
};

export default Users;
