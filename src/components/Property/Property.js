import React, { useContext } from "react";
import formatMoney from "../../util/formatMoney";
import { Link } from "react-router-dom";
import randomPictureProvider from "../../util/randomPictureProvider";
import propertyStatusMapper from "../../util/propertyStatusMapper";
import Favourite from "../Favourite/Favourite";
import './Property.css';
import UserContext from "../../context/UserContext";
import hasRole from "../../util/hasRole";

const Property = ({ property, savedPropertiesState }) => {

    const currentUser = useContext(UserContext);

    const pictureUrl = randomPictureProvider();
    const propertyStatus = propertyStatusMapper(property.status);

    return (
        <div className='property'>
            <Link to={`/properties/${property.slug}`} key={property.id} className='picture-link'>
                <div className={`status-badge ${propertyStatus}`}>{propertyStatus}</div>
                <img className='picture' src={pictureUrl} alt="" />
            </Link>
            <div className="info">
                <Link to={`/properties/${property.slug}`} key={property.id} className='name'>
                    {property.name}
                </Link>
                <div className='price'>{formatMoney(property.price)}</div>
                <div className='description'>{property.description}</div>
                {
                    hasRole(currentUser, "CUSTOMER") &&
                    !hasRole(currentUser, "ADMIN") &&
                    <Favourite property={property} savedPropertiesState={savedPropertiesState} />
                }

            </div>
        </div>
    );
}

export default Property;