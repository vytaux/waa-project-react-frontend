import React, { useEffect } from "react";
import FetchService from "../service/FetchService";
import Property from "../components/Property";

const Homepage = () => {
  const [properties, setProperties] = React.useState([]);

  useEffect(() => {
    FetchService.getAllProperties()
      .then((response) => {
        setProperties(response.data);
      })
      .catch((e) => {
        console.log("error " + e);
      });
  }, []);

  return (
    <div className="homepage">
      <h1>Trending Properties</h1>
      <div className="properties">
        {properties.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
