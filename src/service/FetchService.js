import API from "../config/Api";

const FetchService = {
    _call(method, url, data = null, headers = {}) {
        return new Promise((resolve, reject) => {
            try {
                const response = API({
                    method: method,
                    url: url,
                    data: data,
                    headers: headers
                });
                return resolve(response);
            } catch (error) {
                console.error(error.message);
                reject(error);
            }
        });
    },
    getAllProperties() {
        return this._call('GET', '/properties');
    },
    login(email, password) {
        return this._call('POST', '/auth/login', { email, password });
    },
    register(email, password, role) {
        return this._call('POST', '/auth/register', { email, password, role });
    },
    getPendingOwners(token) {
        return this._call('GET', '/admin/owners/pending', null, {
            Authorization: `Bearer ${token}`
        });
    },
    approveOwner(token, userId) {
        return this._call('PUT', `/admin/owners/${userId}/approve`, null, {
            Authorization: `Bearer ${token}`
        });
    },
    getPropertyBySlug(slug) {
        return this._call('GET', `/properties/${slug}`);
    },
    createOffer(token, propertyId, message, price) {
        return this._call('POST', '/customers/offers', { propertyId, message, price }, {
            Authorization: `Bearer ${token}`
        });
    },
    getOwnersOffers(token) {
        return this._call('GET', '/owners/offers', null, {
            Authorization: `Bearer ${token}`
        });
    },
    acceptOffer(token, offerId) {
        return this._call('PUT', `/owners/offers/${offerId}/accept`, null, {
            Authorization: `Bearer ${token}`
        });
    },
    rejectOffer(token, offerId) {
        return this._call('PUT', `/owners/offers/${offerId}/reject`, null, {
            Authorization: `Bearer ${token}`
        });
    },
    getOwnersProperties(accessToken) {
        return this._call('GET', '/owners/properties', null, {
            Authorization: `Bearer ${accessToken}`
        });
    },
    turnPropertyContingent(accessToken, propertyId) {
        return this._call('PUT', `/owners/properties/${propertyId}/turnContingent`, null, {
            Authorization: `Bearer ${accessToken}`
        });
    },
    cancelPropertyContingency(accessToken, propertyId) {
        return this._call('PUT', `/owners/properties/${propertyId}/cancelContingency`, null, {
            Authorization: `Bearer ${accessToken}`
        });
    },
    getCustomersOffers(accessToken) {
        return this._call('GET', '/customers/offers', null, {
            Authorization: `Bearer ${accessToken}`
        });
    },
    createProperty(accessToken, property) {
        return this._call('POST', '/owners/properties', property, {
            Authorization: `Bearer ${accessToken}`
        });
    },
    updateProperty(accessToken, id, property) {
        return this._call('PUT', `/owners/properties/${id}`, property, {
            Authorization: `Bearer ${accessToken}`
        });
    },
    deleteProperty(accessToken, propertyId) {
        return this._call('DELETE', `/owners/properties/${propertyId}`, null, {
            Authorization: `Bearer ${accessToken}`
        });
    }
}

export default FetchService;