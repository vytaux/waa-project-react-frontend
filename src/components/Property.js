import React from "react";
import formatMoney from "../util/formatMoney";
import {Link} from "react-router-dom";
import randomPictureProvider from "../util/randomPictureProvider";

const Property = ({ property }) => {

    const pictureUrl = randomPictureProvider();

    return (
        <div className='property'>
            <Link to={`/properties/${property.slug}`} key={property.id} className='picture-link'>
                <div className='status-badge'>{property.status}</div>
                <img className='picture' src={pictureUrl} alt=""/>
            </Link>
            <div className="info">
            <Link to={`/properties/${property.slug}`} key={property.id} className='name'>
                    {property.name}
                </Link>
                <div className='price'>{formatMoney(property.price)}</div>
                <div className='description'>{property.description}</div>
            </div>
        </div>
    );
}

export default Property;