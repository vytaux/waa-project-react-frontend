import React, {useContext, useEffect} from "react";
import FetchService from "../../service/FetchService";
import Property from "../../components/Property/Property";
import UserContext from "../../context/UserContext";
import './Homepage.css';

const Homepage = () => {

    const currentUser = useContext(UserContext);

    const [properties, setProperties] = React.useState([]);
    const [savedPropertiesState, setSavedPropertiesState] = React.useState([]);

    useEffect(() => {
        FetchService.getAllProperties()
            .then(response => {
                setProperties(response.data);
            }).catch(e => {
                console.log("error " + e)
            }
            );

        // yikes
        if (currentUser) {
            FetchService.getSavedProperties(currentUser.accessToken)
                .then(response => setSavedPropertiesState(response.data))
        }
    }, []);

    return (
        <div className='homepage'>
            <h1>Trending Properties</h1>
            <div className='properties'>
                {properties.map(property => (
                    <Property key={property.id} property={property} savedPropertiesState={savedPropertiesState}/>
                ))}
            </div>
        </div>
    );
}

export default Homepage;