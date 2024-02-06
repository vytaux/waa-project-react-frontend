import React, { useEffect } from "react";
import FetchService from "../service/FetchService";
import Property from "../components/Property";


const Homepage = () => {

    const [properties, setProperties] = React.useState([]);

    useEffect(() => {
        FetchService.getAllProperties()
            .then(response => {
                setProperties(response.data);
            }).catch(e => {
                console.log("error " + e)
            }
            );
    }, []);

    if (!properties.length)
        return (
            <div className='properties flex'>
                <h1>Loading</h1>
            </div>
        );
    else
        return (
            <div className='properties flex'>
                {properties.map(property => (
                    <Property key={property.id} property={property}  />
                ))}
            </div>
        );
}

export default Homepage;