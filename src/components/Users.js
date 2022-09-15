import { useState } from "react";
import styles from "../stattic/users.module.css";

const Users = ({
  fname,
  gender,
  dbirth,
  email,
  zipCode,
  index,
  users,
  setUsers,
  money,
}) => {
  const [likebtn, setLikebtn] = useState(120);

  const UpdateMoney = (i, isMoney) => {
    const newUser = [...users];
    if (isMoney) {
      newUser[i].money++;
    } else {
      newUser[i].money--;
    }
    setUsers(newUser);
  };

  return (
    <>
      <li className={styles.users}>
        <div className={styles.userInfo}>
          <h3>Name: {fname}</h3>
          <h3>Gender: {gender}</h3>
          <p>DOB: {dbirth}</p>
          <p>E-mail: {email}</p>
          <p>Zip code: {zipCode}</p>
          <p>Likes: {likebtn}</p>
        </div>
        <div className={styles.userBtns}>
          <button className="like" onClick={(e) => setLikebtn(likebtn + 1)}>
            I like {fname}
          </button>
          <button className="dislike" onClick={(e) => setLikebtn(likebtn - 1)}>
            I don't like {fname}
          </button>
          <button onClick={(e) => UpdateMoney(index, true)}>
            Give $ {money}
          </button>

          <button className="delete">Delete User</button>
        </div>
      </li>
    </>
  );
};

export default Users;
