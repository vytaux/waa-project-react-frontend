import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(null);

  const updateUser = (newUser) => {
    setcurrentUser(newUser);
  };

  return (
    <UserContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
