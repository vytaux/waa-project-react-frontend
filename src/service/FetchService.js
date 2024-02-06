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
    }
}

export default FetchService;