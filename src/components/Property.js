import React, {useContext} from "react";
import formatMoney from "../util/formatMoney";
import {Link} from "react-router-dom";
import randomPictureProvider from "../util/randomPictureProvider";
import propertyStatusMapper from "../util/propertyStatusMapper";
import FetchService from "../service/FetchService";
import UserContext from "../context/UserContext";

const Property = ({ property }) => {

    const currentUser = useContext(UserContext);

    const pictureUrl = randomPictureProvider();
    const propertyStatus = propertyStatusMapper(property.status);

    const handleAddToSavedPropertiesList = () => {
        FetchService.addToSavedPropertiesList(currentUser.accessToken, property.id)
            .then(response => console.log(response));
    }

    return (
        <div className='property'>
            <Link to={`/properties/${property.slug}`} key={property.id} className='picture-link'>
                <div className={`status-badge ${propertyStatus}`}>{propertyStatus}</div>
                <img className='picture' src={pictureUrl} alt=""/>
            </Link>
            <div className="info">
                <Link to={`/properties/${property.slug}`} key={property.id} className='name'>
                    {property.name}
                </Link>
                <div className='price'>{formatMoney(property.price)}</div>
                <div className='description'>{property.description}</div>
                <button onClick={handleAddToSavedPropertiesList}>Save</button>
            </div>
        </div>
    );
}

export default Property;