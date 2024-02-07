import React, {useEffect, useRef, useState} from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import FetchService from "../service/FetchService";
import hasRole from "../util/hasRole";


const EditProperty = ({ currentUser }) => {

    const { state } = useLocation();
    const navigate = useNavigate();

    const message = useRef();
    const price = useRef();

    const save = () => {
        FetchService.updateOffer(
            currentUser.accessToken,
            state.id,
            message.current.value,
            price.current.value
        ).then(response => navigate('/customer'))
    }

    return (
        <React.Fragment>
            <div>Message <input type="text" ref={message} defaultValue={state.message}/></div>
            <div>Price <input type="number" ref={price} defaultValue={state.price}/></div>
            <button onClick={save}>Save</button>
        </React.Fragment>
    );
}

export default EditProperty;