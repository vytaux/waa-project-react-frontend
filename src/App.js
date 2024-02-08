import './App.css';
import { BrowserRouter } from "react-router-dom";
import Header from "./containers/Header";
import PageRoutes from './routes/PageRoutes';
import { useContext, useEffect } from 'react';
import UserContext from "./context/UserContext";
import hasRole from './util/hasRole';
import Footer from "./containers/Footer";


const App = () => {
    const { currentUser, updateUser } = useContext(UserContext)

    document.title = 'NextHome | #1 Real Estate Platform in the World!';
    console.log(currentUser)

    return (
        <BrowserRouter>
            <Header />
                <PageRoutes currentUser={currentUser} setCurrentUser={updateUser} />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
