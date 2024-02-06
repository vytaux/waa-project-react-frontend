import React, {useEffect, useRef, useState} from "react";
import {Link, useParams} from "react-router-dom";
import FetchService from "../service/FetchService";
import hasRole from "../util/hasRole";


const PropertyDetails = ({ currentUser }) => {

    const { slug } = useParams();
    const [propertyDetails, setPropertyDetails] = useState({});
    const [loading, setLoading] = useState(false);

    const offerMessage = useRef();
    const offerPrice = useRef();
    const notification = useRef();

    useEffect(() => {
        setLoading(true);
        FetchService.getPropertyBySlug(slug)
            .then(response => {
                setPropertyDetails(response.data)
                setLoading(false);
            });
    }, [slug]);

    const submitOffer = () => {
        FetchService.createOffer(
            currentUser.accessToken,
            propertyDetails.id,
            offerMessage.current.value,
            offerPrice.current.value
        ).then(response => {
            notification.current.innerHTML = 'Success!';
        });
    }

    return (
        <React.Fragment>
            {loading
                ? <p>Loading...</p>
                :
                <div className='flex propertyDetailsWrapper'>
                    <div className='propertyDetails'>
                        <h2>{propertyDetails.name}</h2>
                        <img height='250' src="/1.webp" alt=""/>
                        <img height='250' src="/2.webp" alt=""/>
                        <img height='250' src="/3.webp" alt=""/>
                        <p>{propertyDetails.description}</p>
                    </div>
                    <div className='offerForm'>
                        <h3>Make an Offer</h3>
                        <div>
                            <div>Your Message</div>
                            <textarea ref={offerMessage} />
                        </div>
                        <div>
                            <div>Your Price $</div>
                            <input type="number" ref={offerPrice}/>
                        </div>
                        <button onClick={submitOffer} disabled={!hasRole(currentUser, 'CUSTOMER')}>
                            Make an Offer
                        </button>
                        <div ref={notification}></div>
                        {!hasRole(currentUser, 'CUSTOMER') &&
                            <p><Link to='/login'>Login</Link> to make an offer</p>
                        }
                    </div>
                </div>
            }
        </React.Fragment>
    );
}

export default PropertyDetails;