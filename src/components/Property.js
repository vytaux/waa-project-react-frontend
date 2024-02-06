import React from "react";
import formatMoney from "../util/formatMoney";
import {Link} from "react-router-dom";
import randomPictureProvider from "../util/randomPictureProvider";

const Property = ({ property }) => {

    const pictureUrl = randomPictureProvider();

    return (
        <Link to={`/properties/${property.slug}`} key={property.id} className='property'>
            <h3>{property.name}</h3>
            <img height='150' width='200' src={pictureUrl} alt=""/>
            <p>{property.description}</p>
            <p>{formatMoney(property.price)}</p>
        </Link>
    );
}

export default Property;