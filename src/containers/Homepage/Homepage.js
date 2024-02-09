
import React, { useContext, useEffect, useRef } from "react";
import FetchService from "../../service/FetchService";
import Property from "../../components/Property/Property";
import UserContext from "../../context/UserContext";
import './Homepage.css';
import hasRole from "../../util/hasRole";

const Homepage = () => {
    const inputName = useRef(null);
    const inputDesc = useRef(null);
    const inputMin = useRef(null);
    const inputMax = useRef(null);
    const currentUser = useContext(UserContext);

    const [properties, setProperties] = React.useState([]);
    const [savedPropertiesState, setSavedPropertiesState] = React.useState([]);
    const [refresh, setRefresh] = React.useState(true);


    useEffect(() => {

        FetchService.getAllProperties(inputName.current.value, inputDesc.current.value, inputMin.current.value, inputMax.current.value)
            .then(response => {
                setProperties(response.data);
            }).catch(e => {
                console.log("error " + e)
            }
            );
        // else

        // yikes
        if (hasRole(currentUser, "CUSTOMER") && !hasRole(currentUser, "ADMIN")) {
            FetchService.getSavedProperties(currentUser.accessToken)
                .then(response => setSavedPropertiesState(response.data))
        }
    }, [refresh]);

    const search = (e) => {
        e.preventDefault();
        setRefresh(!refresh);
    }
    return (
        <div className='homepage'>
            <h1>Trending Properties</h1>

            <form onSubmit={search} style={{ textAlign: "center" }}>
                <input
                    type="text"
                    placeholder="Property Name"
                    ref={inputName}
                />
                <input
                    type="text"
                    placeholder="Description"
                    ref={inputDesc}

                />
                <input
                    type="text"
                    placeholder="Min price"
                    ref={inputMin}

                />
                <input
                    type="text"
                    placeholder="Max price"
                    ref={inputMax}

                />
                <button type="submit">Search</button>
            </form>


            <div className='properties'>
                {properties.map(property => (
                    <Property key={property.id} property={property} savedPropertiesState={savedPropertiesState} />
                ))}
            </div>
        </div>
    );
}

export default Homepage;