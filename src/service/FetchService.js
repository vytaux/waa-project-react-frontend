import API from "../config/Api";

const FetchService = {
  _call(method, url, data = null, headers = {}) {
    return new Promise((resolve, reject) => {
      try {
        const response = API({
          method: method,
          url: url,
          data: data,
          headers: headers,
        });
        return resolve(response);
      } catch (error) {
        console.error(error.message);
        reject(error);
      }
    });
  },
  getAllProperties(name, desc, min, max) {
    return this._call(
      "GET",
      `/properties?name=${name}&description=${desc}&minPrice=${min}&maxPrice=${max}&`
    );
  },
  getAllPropertiesByCriteriaSearch() {
    return this._call("GET", "/properties/search");
  },
  login(email, password) {
    return this._call("POST", "/auth/login", { email, password });
  },
  register(email, password, role) {
    return this._call("POST", "/auth/register", { email, password, role });
  },
  getPendingOwners(token) {
    return this._call("GET", "/admin/owners/pending", null, {
      Authorization: `Bearer ${token}`,
    });
  },
  approveOwner(token, userId) {
    return this._call("PUT", `/admin/owners/${userId}/approve`, null, {
      Authorization: `Bearer ${token}`,
    });
  },
  getPropertyBySlug(slug) {
    return this._call("GET", `/properties/${slug}`);
  },
  createOffer(token, propertyId, message, price) {
    return this._call(
      "POST",
      "/customers/offers",
      { propertyId, message, price },
      {
        Authorization: `Bearer ${token}`,
      }
    );
  },
  getOwnersOffers(token) {
    return this._call("GET", "/owners/offers", null, {
      Authorization: `Bearer ${token}`,
    });
  },
  acceptOffer(token, offerId) {
    return this._call("PUT", `/owners/offers/${offerId}/accept`, null, {
      Authorization: `Bearer ${token}`,
    });
  },
  rejectOffer(token, offerId) {
    return this._call("PUT", `/owners/offers/${offerId}/reject`, null, {
      Authorization: `Bearer ${token}`,
    });
  },
  getOwnersProperties(accessToken) {
    return this._call("GET", "/owners/properties", null, {
      Authorization: `Bearer ${accessToken}`,
    });
  },
  turnPropertyContingent(accessToken, propertyId) {
    return this._call(
      "PUT",
      `/owners/properties/${propertyId}/turnContingent`,
      null,
      {
        Authorization: `Bearer ${accessToken}`,
      }
    );
  },
  cancelPropertyContingency(accessToken, propertyId) {
    return this._call(
      "PUT",
      `/owners/properties/${propertyId}/cancelContingency`,
      null,
      {
        Authorization: `Bearer ${accessToken}`,
      }
    );
  },
  getCustomersOffers(accessToken) {
    return this._call("GET", "/customers/offers", null, {
      Authorization: `Bearer ${accessToken}`,
    });
  },
  createProperty(accessToken, property) {
    return this._call("POST", "/owners/properties", property, {
      Authorization: `Bearer ${accessToken}`,
    });
  },
  updateProperty(accessToken, id, property) {
    return this._call("PUT", `/owners/properties/${id}`, property, {
      Authorization: `Bearer ${accessToken}`,
    });
  },
  deleteProperty(accessToken, propertyId) {
    return this._call("DELETE", `/owners/properties/${propertyId}`, null, {
      Authorization: `Bearer ${accessToken}`,
    });
  },
  cancelOffer(accessToken, offerId) {
    return this._call("PUT", `/customers/offers/${offerId}/cancel`, null, {
      Authorization: `Bearer ${accessToken}`,
    });
  },
  updateOffer(accessToken, id, message, price) {
    return this._call(
      "PUT",
      `/customers/offers/${id}`,
      { message, price },
      {
        Authorization: `Bearer ${accessToken}`,
      }
    );
  },
  addToSavedPropertiesList(accessToken, propertyId) {
    return this._call(
      "PUT",
      `/customers/0/saved-properties`,
      { propertyId },
      {
        Authorization: `Bearer ${accessToken}`,
      }
    );
  },
  getSavedProperties(accessToken) {
    return this._call("GET", "/customers/0/saved-properties", null, {
      Authorization: `Bearer ${accessToken}`,
    });
  },
  removePropertyFromSavedList(accessToken, propertyId) {
    return this._call(
      "DELETE",
      `/customers/0/saved-properties/${propertyId}`,
      null,
      {
        Authorization: `Bearer ${accessToken}`,
      }
    );
  },
  createMessageSession(accessToken, propertyId, message) {
    return this._call(
      "POST",
      "/message-sessions",
      { propertyId, message },
      {
        Authorization: `Bearer ${accessToken}`,
      }
    );
  },
  turnPropertyContingentForCustomer(accessToken, offerId) {
    return this._call(
      "PUT",
      `/customers/offers/${offerId}/turnContingent`,
      null,
      {
        Authorization: `Bearer ${accessToken}`,
      }
    );
  },

  sellProperty(accessToken, id) {
    return this._call(
      "PUT",
      `/owners/properties/${id}/sellProperty`,
      null,
      {
        Authorization: `Bearer ${accessToken}`,
      }
    );
  }
};

export default FetchService;
