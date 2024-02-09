import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Missing from "../components/Missing/Missing";
import Homepage from "../containers/Homepage/Homepage";
import Login from "../components/Login";
import Register from "../components/Register";
import RequireAuth from "../components/RequireAuth";
import AdminDashboard from "../containers/AdminDashboard";
import OwnerDashboard from "../containers/OwnerDashboard";
import CustomerDashboard from "../containers/CustomerDashboard";
import PropertyDetails from "../components/PropertyDetails/PropertyDetails";
import EditProperty from "../components/EditProperty";
import EditOffer from "../components/EditOffer";
import Message from "../containers/Message/Message";
import UserContext from "../context/UserContext";

function PageRoutes({ currentUser, setCurrentUser }) {
  return (
    <UserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path="/login"
          element={<Login setCurrentUser={setCurrentUser} />}
        />

        {/*Show properties homepage*/}
        <Route path="/" element={<Homepage />} />
        <Route
          path="/properties/:slug"
          element={<PropertyDetails currentUser={currentUser} />}
        />

        <Route element={<RequireAuth currentUser={currentUser} />}>
          {/*ROLE_ADMIN*/}
          <Route
            path="/admin"
            element={<AdminDashboard currentUser={currentUser} />}
          />
          {/*ROLE_OWNER*/}
          <Route
            path="/owner"
            element={<OwnerDashboard currentUser={currentUser} />}
          />
          {/*ROLE_CUSTOMER*/}
          <Route
            path="/customer"
            element={<CustomerDashboard currentUser={currentUser} />}
          />

          {/*ROLE_ADMIN || ROLE_OWNER*/}
          <Route
            path="/owner/add-property"
            element={<Navigate to="/owner/edit-property" replace />}
          />
          <Route
            path="/owner/edit-property/:id?"
            element={<EditProperty currentUser={currentUser} />}
          />
          <Route
            path="/customer/edit-offer/:id"
            element={<EditOffer currentUser={currentUser} />}
          />

          {/* Authenticated */}
          <Route path="/messages" element={<Message />} />
        </Route>

        {/*Show Register/Signup page*/}
        <Route path="/register" element={<Register />} />

        {/*beautiful 404*/}
        <Route path="*" element={<Missing />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default PageRoutes;
