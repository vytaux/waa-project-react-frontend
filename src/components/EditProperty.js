import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import FetchService from "../service/FetchService";
import hasRole from "../util/hasRole";


const EditProperty = ({ currentUser }) => {

    // if id is undefined, that means this is a new property
    const { id } = useParams();
    const { state } = useLocation();

    const name = useRef();
    const slug = useRef();
    const price = useRef();
    const description = useRef();
    const navigate = useNavigate();

    const save = () => {
        const property = {
            name: name.current.value,
            slug: slug.current.value,
            price: price.current.value,
            description: description.current.value
        }

        if (!name.current.value)
            alert("Please enter name");
        else if (!slug.current.value)
            alert("Please enter slug")
        else if (!price.current.value)
            alert("Please enter price")
        else if (!description.current.value)
            alert("Please enter description")
        else
            if (id === undefined) {
                console.log('create')
                FetchService.createProperty(currentUser.accessToken, property)
                    .then(response => navigate('/owner')).catch(e => {
                        console.log(e)
                        alert(e.response.data);
                    })
                // update
            } else {
                console.log('update')
                FetchService.updateProperty(currentUser.accessToken, id, property)
                    .then(response => navigate('/owner'))
                    .catch(e => {
                        console.log(e)
                        alert(e.response.data);
                    })
            }
    }

    return (
        <main className='edit-property-content'>
            <h1 style={{ textAlign: "center" }} >List your property on the Market</h1>
            <div style={{ textAlign: "center", margin: "auto" }} className="form">
                <div className='form-group'>
                    <label>Name</label>
                    <input type="text" ref={name} defaultValue={state?.name} />
                </div>
                <div className='form-group'>
                    <label>Slug</label>
                    <input type="text" ref={slug} defaultValue={state?.slug} />
                </div>
                <div className='form-group'>
                    <label>Price</label>
                    <input type="number" ref={price} defaultValue={state?.price} />
                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <textarea ref={description} defaultValue={state?.description}></textarea>
                </div>
                <button onClick={save}>Save</button>
            </div>
        </main>
    );
}

export default EditProperty;