import './App.css';
import PageRoutes from "./routes/PageRoutes";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import {useState} from "react";

const App = () => {

    document.title = 'OneHouse | #1 Real Estate Platform in the World!';

    const [currentUser, setCurrentUser] = useState(null);

    return (
        <BrowserRouter>
            <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <PageRoutes currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </BrowserRouter>
    );
}

export default App;
