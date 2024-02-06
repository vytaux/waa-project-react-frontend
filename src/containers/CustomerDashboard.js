import React, {useEffect} from 'react'
import FetchService from "../service/FetchService";

function CustomerDashboard({ currentUser }) {
    const [offersState, setOffersState] = React.useState([])

    const fetchOffers = () => {
        FetchService.getCustomersOffers(currentUser.accessToken)
            .then(response => setOffersState(response.data))
    }

    useEffect(() => fetchOffers(), []);

    return (
        <React.Fragment>
            <h1>My Offers</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Property</th>
                        <th>Message</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {offersState.map(offer => (
                        <tr key={offer.id}>
                            <td>{offer.id}</td>
                            <td>{offer.propertyId}</td>
                            <td>{offer.message}</td>
                            <td>{offer.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default CustomerDashboard
