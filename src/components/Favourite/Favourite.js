import React, {useContext, useEffect, useState} from "react";
import FetchService from "../../service/FetchService";
import UserContext from "../../context/UserContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import './Favourite.css';

const Favourite = ({ property, savedPropertiesState }) => {

    const currentUser = useContext(UserContext);

    const [isFavourite, setIsFavourite] = useState(false)

    useEffect(() => {
        setIsFavourite(savedPropertiesState.some(savedProperty => savedProperty.id === property.id))
    }, [property.id, savedPropertiesState]);

    const toggleFavourite = () => {
        if (isFavourite) {
            FetchService.removePropertyFromSavedList(currentUser.accessToken, property.id)
                .then(response => setIsFavourite(false));
        } else {
            FetchService.addToSavedPropertiesList(currentUser.accessToken, property.id)
                .then(response => setIsFavourite(true));
        }
    }

    return (
        currentUser && <FontAwesomeIcon onClick={toggleFavourite} className='favourite-icon'
                                        style={{color: 'red', cursor: 'pointer'}}
                                        size='lg'
                                        icon={isFavourite ? solidHeart : regularHeart}/>
    );
}

export default Favourite;