import React, {useEffect} from "react";
import FetchService from "../service/FetchService";
import Property from "./Property";


const Homepage = () => {

    const [properties, setProperties] = React.useState([]);

    useEffect(() => {
        FetchService.getAllProperties()
            .then(response => {
                setProperties(response.data);
            });
    }, []);

    return (
        <div className='properties flex'>
            {properties.map(property => (
                <Property key={property.id} property={property} />
            ))}
        </div>
    );
}

export default Homepage;