import React, {useEffect, useRef, useState} from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
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

        // new
        console.log(id)
        if (id === undefined) {
            console.log('create')
            FetchService.createProperty(currentUser.accessToken, property)
                .then(response => navigate('/owner'))
        // update
        } else {
            console.log('update')
            FetchService.updateProperty(currentUser.accessToken, id, property)
                .then(response => navigate('/owner'))
        }
    }

    return (
        <React.Fragment>
            <div>Name <input type="text" ref={name} defaultValue={state?.name}/></div>
            <div>Slug <input type="text" ref={slug} defaultValue={state?.slug}/></div>
            <div>Price <input type="number" ref={price} defaultValue={state?.price}/></div>
            <div>Description <textarea ref={description} defaultValue={state?.description}></textarea></div>
            <button onClick={save}>Save</button>
        </React.Fragment>
    );
}

export default EditProperty;