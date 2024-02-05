import API from "../config/Api";

const FetchService = {
    _call: function (method, url, data = null, headers = {}) {
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
    getAllProperties: function () {
        return this._call('GET', '/properties');
    },
    login: function (email, password) {
        return this._call('POST', '/auth/login', {email, password});
    },
}

export default FetchService;