import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FetchService from "../service/FetchService";
import hasRole from "../util/hasRole";

const PropertyDetails = ({ currentUser }) => {
  const { slug } = useParams();
  const [propertyDetails, setPropertyDetails] = useState({});

  const offerMessage = useRef();
  const offerPrice = useRef();
  const notification = useRef();

  useEffect(() => {
    FetchService.getPropertyBySlug(slug).then((response) =>
      setPropertyDetails(response.data)
    );
  }, [slug]);

  const submitOffer = () => {
    FetchService.createOffer(
      currentUser.accessToken,
      propertyDetails.id,
      offerMessage.current.value,
      offerPrice.current.value
    ).then((response) => {
      notification.current.innerHTML = "Success!";
    });
  };

  return (
    <div className="flex property-details-content">
      <div className="property-details w-full">
        <h2>{propertyDetails.name}</h2>
        <p>{propertyDetails.description}</p>

        <div className="pictures">
          <img className="thumbnail" src="/1.webp" alt="" />
          <img className="thumbnail" src="/2.webp" alt="" />
          <img className="thumbnail" src="/3.webp" alt="" />
        </div>
      </div>
      {!hasRole(currentUser, "OWNER") && (
        <div className="form offerForm">
          <h3>Make an Offer</h3>
          <div className="form-group">
            <label>Your Message</label>
            <textarea ref={offerMessage} disabled={!currentUser} />
          </div>
          <div className="form-group">
            <label>Your Price $</label>
            <input type="number" ref={offerPrice} disabled={!currentUser} />
          </div>
          <button
            onClick={submitOffer}
            disabled={!hasRole(currentUser, "CUSTOMER")}
          >
            Make an Offer
          </button>
          <div ref={notification}></div>
          {!hasRole(currentUser, "CUSTOMER") && (
            <p>
              <Link to="/login">Login</Link> to make an offer
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
