import { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    console.log(enteredAge, enteredUsername);

    // Clear form input from newly entered values
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangedHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangedHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={enteredUsername}
          type="text"
          onChange={usernameChangedHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          value={enteredAge}
          id="age"
          type="number"
          onChange={ageChangedHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
