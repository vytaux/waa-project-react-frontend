import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import FetchService from "../../service/FetchService";
import hasRole from "../../util/hasRole";
import ContactOwner from "../ContactOwner";
import SubmitOffer from "../SubmitOffer";
import UserContext from "../../context/UserContext";
import './PropertyDetails.css';

const PropertyDetails = () => {

  const currentUser = useContext(UserContext);

  const { slug } = useParams();
  const [propertyDetails, setPropertyDetails] = useState({});

  useEffect(() => {
    FetchService.getPropertyBySlug(slug).then((response) =>
      setPropertyDetails(response.data)
    );
  }, [slug]);

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
          <div>
            <div className="form offerForm">
              <ContactOwner propertyDetails={propertyDetails} />
              <SubmitOffer  propertyDetails={propertyDetails} />
            </div>
          </div>
      )}
    </div>
  );
};

export default PropertyDetails;
