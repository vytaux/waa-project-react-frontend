import {useCallback, useState} from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Memoize the updateUser function
  const updateUser = useCallback((newUser) => {
    setCurrentUser(newUser);
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
