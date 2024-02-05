import React from "react";
import formatMoney from "../util/formatMoney";
import {Link} from "react-router-dom";


const Property = ({ property }) => {

    return (
        // TODO use slug???
        <Link to={`/properties/${property.id}`} key={property.id} className='property'>
            <h3>{property.name}</h3>
            <p>{property.description}</p>
            <p>{formatMoney(property.price)}</p>
        </Link>
    );
}

export default Property;