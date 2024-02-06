import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import FetchService from "../service/FetchService";


const PropertyDetails = () => {

    const { slug } = useParams();
    const [propertyDetails, setPropertyDetails] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        FetchService.getPropertyBySlug(slug)
            .then(response => {
                setPropertyDetails(response.data)
                setLoading(false);
            });
    }, [slug]);


    return (
        <div>
            {loading ? (
                // Render loading indicator or placeholder content
                <p>Loading...</p>
            ) : (
                // Render actual content after data is loaded
                <div className='propertyDetails'>
                    {/* Display your actual content using the 'data' state */}
                    <h2>{propertyDetails.name}</h2>
                    <img height='250' src="/1.webp" alt=""/>
                    <img height='250' src="/2.webp" alt=""/>
                    <img height='250' src="/3.webp" alt=""/>
                    <p>{propertyDetails.description}</p>
                    {/* Other content */}
                </div>
            )}
        </div>
    );
}

export default PropertyDetails;