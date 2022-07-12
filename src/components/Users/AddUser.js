import { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
// import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  // if you just want to read a value refs are probably better than state
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(nameInputRef.current.value);
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({ title: "err", message: "Please enter" });
      return;
    }
    if (+enteredAge < 1) {
      setError({ title: "err", message: "Please enter" });
      return;
    }
    console.log(enteredAge, enteredUsername);

    // Add new user and age to list, on click
    props.onAddUser(enteredName, enteredUserAge);

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
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            value={enteredAge}
            id="age"
            type="number"
            onChange={ageChangedHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
