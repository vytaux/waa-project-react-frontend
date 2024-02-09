import React, { useEffect } from "react";
import FetchService from "../service/FetchService";
import formatMoney from "../util/formatMoney";
import { Link, Navigate } from "react-router-dom";

function CustomerDashboard({ currentUser }) {
  const [offersState, setOffersState] = React.useState([]);
  const [savedPropertiesState, setSavedPropertiesState] = React.useState([]);

  const fetchOffers = () => {
    FetchService.getCustomersOffers(currentUser.accessToken).then((response) =>
      setOffersState(response.data)
    );
  };

  useEffect(() => {
    fetchOffers();
    fetchSavedProperties();
  }, []);

  const cancelOffer = (offerId) => {
    FetchService.cancelOffer(currentUser.accessToken, offerId).then(
      (response) => fetchOffers()
    );
  };

  const fetchSavedProperties = () => {
    FetchService.getSavedProperties(currentUser.accessToken).then((response) =>
      setSavedPropertiesState(response.data)
    );
  };

  const turnOnContingent = (offerId) => {
    FetchService.turnPropertyContingentForCustomer(
      currentUser.accessToken,
      offerId
    )
      .then((response) => fetchOffers())
      .catch((error) => console.log(error));
  };

  const removePropertyFromSavedList = (propertyId) => {
    FetchService.removePropertyFromSavedList(
      currentUser.accessToken,
      propertyId
    ).then((response) => fetchSavedProperties());
  };

  return (
    <main className="customer-dashboard-content">
      <h1>My Offers</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Property</th>
            <th>Message</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {offersState.map((offer) => (
            <tr key={offer.id}>
              <td>{offer.id}</td>
              <td>{offer.property.name}</td>
              <td>{offer.message}</td>
              <td>{formatMoney(offer.price)}</td>
              <td>{offer.status}</td>
              <td>
                {offer.property.status !== "STATUS_CONTINGENT" && (
                  <React.Fragment>
                    <Link to={`/customer/edit-offer/${offer.id}`} state={offer}>
                      Edit
                    </Link>
                    <button onClick={() => cancelOffer(offer.id)}>
                      Cancel
                    </button>
                  </React.Fragment>
                )}
              </td>
              <td>
                {offer.status === "STATUS_ACCEPTED" && (
                  <button onClick={() => turnOnContingent(offer.id)}>
                    Turn on Contingent
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Saved Properties</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Property</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {savedPropertiesState.map((property) => (
            <tr key={property.id}>
              <td>{property.id}</td>
              <td>{property.name}</td>
              <td>
                <button
                  onClick={() => removePropertyFromSavedList(property.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default CustomerDashboard;
