import './App.css';
import { BrowserRouter } from "react-router-dom";
import Header from "./containers/Header/Header";
import PageRoutes from './routes/PageRoutes';
import { useContext, useEffect } from 'react';
import UserContext from "./context/UserContext";
import Footer from "./containers/Footer/Footer";


const App = () => {
    const { currentUser, updateUser } = useContext(UserContext)

    document.title = 'NextHome | #1 Real Estate Platform in the World!';
    // console.log(currentUser)

    // trigger on component mount
    useEffect(() => {
        // Retrieve data
        const user = sessionStorage.getItem('user');

        if (user) {
            updateUser(JSON.parse(user));

        }
    }, []);

    return (
        <BrowserRouter>
            <Header />
            <PageRoutes currentUser={currentUser} setCurrentUser={updateUser} />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
