import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FetchService from "../service/FetchService";
import hasRole from "../util/hasRole";
import UserContext from "../context/UserContext";

const SubmitOffer = ({ propertyDetails }) => {
  const currentUser = useContext(UserContext);

  const offerMessage = useRef();
  const offerPrice = useRef();
  const notification = useRef();

  const submitOffer = () => {
    if (!offerMessage.current.value) alert("Please enter offerMessage");
    else if (!offerPrice.current.value) alert("Please enter offerPrice");
    else
      FetchService.createOffer(
        currentUser.accessToken,
        propertyDetails.id,
        offerMessage.current.value,
        offerPrice.current.value
      ).then((response) => alert("Offer has been submitted"));
  };

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default SubmitOffer;
