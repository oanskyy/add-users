import { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({ title: "err", message: "Please enter" });
      return;
    }
    if (+enteredAge < 1) {
      setError({ title: "err", message: "Please enter" });
      return;
    }
    console.log(enteredAge, enteredUsername);

    // Add new user and age to list, on click
    props.onAddUser(enteredUsername, enteredAge);

    // Clear form input from newly entered values and add value=thisnew state on the element
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangedHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangedHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {/* bind title and msg */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onOk={errorHandler}
        />
      )}
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
    </>
  );
};

export default AddUser;
