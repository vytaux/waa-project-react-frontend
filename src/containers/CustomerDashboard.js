import React, {useEffect} from 'react'
import FetchService from "../service/FetchService";
import formatMoney from "../util/formatMoney";
import {Link, Navigate} from "react-router-dom";

function CustomerDashboard({ currentUser }) {
    const [offersState, setOffersState] = React.useState([])

    const fetchOffers = () => {
        FetchService.getCustomersOffers(currentUser.accessToken)
            .then(response => setOffersState(response.data))
    }

    useEffect(() => fetchOffers(), []);

    const cancelOffer = (offerId) => {
        FetchService.cancelOffer(currentUser.accessToken, offerId)
            .then(response => fetchOffers())
    }

    return (
        <React.Fragment>
            <h1>My Offers</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Property</th>
                        <th>Message</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {offersState.map(offer => (
                        <tr key={offer.id}>
                            <td>{offer.id}</td>
                            <td>{offer.property.name}</td>
                            <td>{offer.message}</td>
                            <td>{formatMoney(offer.price)}</td>
                            <td>{offer.status}</td>
                            <td>
                                <Link to={`/customer/edit-offer/${offer.id}`} state={offer}>Edit</Link>
                                {offer.property.status !== 'STATUS_CONTINGENT' &&
                                    <button onClick={() => cancelOffer(offer.id)}>Cancel</button>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default CustomerDashboard
