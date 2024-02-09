import React, { useEffect } from 'react'
import FetchService from "../service/FetchService";
import formatMoney from "../util/formatMoney";
import { Link } from "react-router-dom";

function OwnerDashboard({ currentUser }) {

    const [ownersOffersState, setOwnersOffersState] = React.useState([]);
    const [ownersPropertiesState, setOwnersPropertiesState] = React.useState([]);

    const fetchOwnersOffers = () => {
        FetchService.getOwnersOffers(currentUser.accessToken)
            .then(response => {
                setOwnersOffersState(response.data);
            })
    }

    const fetchOwnersProperties = () => {
        FetchService.getOwnersProperties(currentUser.accessToken)
            .then(response => {
                setOwnersPropertiesState(response.data);
            })
    }

    useEffect(() => {
        fetchOwnersOffers();
        fetchOwnersProperties();
    }, []);

    const acceptOffer = (offer) => {
        if (offer.status === "STATUS_CANCELLED")
            alert("Cannot accpet, offer was canceled by customer")
        else
            FetchService.acceptOffer(currentUser.accessToken, offer.id)
                .then(response => {
                    fetchOwnersOffers();
                    fetchOwnersProperties();
                })
    }

    const rejectOffer = (offer) => {
        if (offer.status === "STATUS_CANCELLED")
            alert("Cannot reject, offer was canceled by customer")
        else
            FetchService.rejectOffer(currentUser.accessToken, offer.id)
                .then(response => fetchOwnersOffers())
    }

    const turnPropertyContingent = (propertyId) => {
        FetchService.turnPropertyContingent(currentUser.accessToken, propertyId)
            .then(response => fetchOwnersProperties())
    }

    const cancelPropertyContingency = (propertyId) => {
        FetchService.cancelPropertyContingency(currentUser.accessToken, propertyId)
            .then(response => fetchOwnersProperties())
    }

    const deleteProperty = (propertyId) => {
        FetchService.deleteProperty(currentUser.accessToken, propertyId)
            .then(response => fetchOwnersProperties())
    }

    return (
        <main className='owner-dashboard-content'>
            <h1>Offers</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Message</th>
                        <th>Status</th>
                        <th>Property name</th>
                        <th>Price</th>
                        {/*<th>Buyer</th>*/}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {ownersOffersState.map(offer => (
                        <tr key={offer.id}>
                            <td>{offer.id}</td>
                            <td>{offer.message}</td>
                            <td>{offer.status}</td>
                            <td>{offer.property.name}</td>
                            <td>{formatMoney(offer.price)}</td>
                            {/*<td>{offer.buyer.email}</td>*/}
                            <td>
                                <button onClick={() => acceptOffer(offer)}>Accept</button>
                                <button onClick={() => rejectOffer(offer)}>Reject</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h1>Properties</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {ownersPropertiesState.map(property => (
                        <tr key={property.id}>
                            <td>{property.id}</td>
                            <td>{property.name}</td>
                            <td>{property.status}</td>
                            <td>
                                {/* <button onClick={() => turnPropertyContingent(property.id)}>Turn contingent</button> */}
                                { property.status === "STATUS_CONTINGENT" && <button onClick={() => cancelPropertyContingency(property.id)}>Cancel contingency</button> }
                                <Link to={`/owner/edit-property/${property.id}`} state={property}>Edit property</Link>
                                <button onClick={() => deleteProperty(property.id)}>Delete property</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}

export default OwnerDashboard
