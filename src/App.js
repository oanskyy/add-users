import React from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  return (
    <div>
      <AddUser />
      {/* when i use the usersList I need to set the users prop */}
      <UsersList users={[]} />
    </div>
  );
}

export default App;
