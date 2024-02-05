import './App.css';
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import DefaultRoutes from './routes/DefaultRoutes';
import AdminRoutes from './routes/AdminRoutes';
import { useContext, useEffect } from 'react';
import UserContext from "./context/UserContext";
import hasRole from './util/hasRole';



const App = () => {
    const { currentUser, updateUser } = useContext(UserContext)

    document.title = 'OneHouse | #1 Real Estate Platform in the World!';
 
    //If no current user, jusr render default routes
    if (!currentUser)
        return (
            <BrowserRouter>
                <Header />
                <DefaultRoutes />
            </BrowserRouter>
        );
    else if (currentUser && hasRole(currentUser, "ROLE_ADMIN"))

        return (
            <BrowserRouter>
                <Header />
                <AdminRoutes />
            </BrowserRouter>
        );
}

export default App;
