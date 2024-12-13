import React, { useContext, useEffect, useRef } from "react";
import FetchService from "../../service/FetchService";
import Property from "../../components/Property/Property";
import UserContext from "../../context/UserContext";
import './Homepage.css';
import hasRole from "../../util/hasRole";

const Homepage = () => {
    const inputName = useRef(null);
    const inputDesc = useRef(null);
    const inputMin = useRef(null);
    const inputMax = useRef(null);
    const currentUser = useContext(UserContext);

    const [properties, setProperties] = React.useState([]);
    const [savedPropertiesState, setSavedPropertiesState] = React.useState([]);
    const [refresh, setRefresh] = React.useState(true);


    useEffect(() => {

        FetchService.getAllProperties(inputName.current.value, inputDesc.current.value, inputMin.current.value, inputMax.current.value)
            .then(response => {
                setProperties(response.data);
            }).catch(e => {
                console.log("error " + e)
            }
            );
        // else

        // yikes
        if (hasRole(currentUser, "CUSTOMER") && !hasRole(currentUser, "ADMIN")) {
            FetchService.getSavedProperties(currentUser.accessToken)
                .then(response => setSavedPropertiesState(response.data))
        }
    }, [currentUser, refresh]);

    const search = (e) => {
        e.preventDefault();
        setRefresh(!refresh);
    }
    return (
        <div className='homepage'>
            <h1>Trending Properties</h1>

            <form className='search-form'
                onSubmit={search}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    borderRadius: "8px",
                    margin: "0 auto 0",
                    marginBottom: "6px",
                    marginTop: "26px"
                }}
            >
                <input
                    type="text"
                    placeholder="Property Name"
                    ref={inputName}
                    style={{
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        fontSize: "14px",
                    }}
                />
                <input
                    type="text"
                    placeholder="Description"
                    ref={inputDesc}
                    style={{
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        fontSize: "14px",
                    }}
                />
                <input
                    type="text"
                    placeholder="Min price"
                    ref={inputMin}
                    style={{
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        fontSize: "14px",
                    }}
                />
                <input
                    type="text"
                    placeholder="Max price"
                    ref={inputMax}
                    style={{
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        fontSize: "14px",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: "10px 22px",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        borderRadius: "4px",
                        border: "none",
                        fontSize: "14px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
                >
                    Search
                </button>
            </form>


            <div className='properties'>
                {properties.map(property => (
                    <Property key={property.id} property={property} savedPropertiesState={savedPropertiesState}/>
                ))}
            </div>
        </div>
    );
}

export default Homepage;