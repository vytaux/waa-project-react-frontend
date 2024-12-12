import React, {useRef} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import FetchService from "../service/FetchService";


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
        <main className='edit-offer-content'>
            <div className="form">
                <div className='form-group'>
                    <label>Message</label>
                    <input type="text" ref={message} defaultValue={state.message}/>
                </div>
                <div className='form-group'>
                    <label>Price</label>
                    <input type="number" ref={price} defaultValue={state.price}/>
                </div>
                <button onClick={save}>Save</button>
            </div>
        </main>
    );
}

export default EditProperty;