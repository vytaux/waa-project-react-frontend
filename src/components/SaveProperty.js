import React, { useContext, useEffect, useState } from "react";
import FetchService from "../service/FetchService";
import { IoHeartSharp } from "react-icons/io5";
import UserContext from "../context/UserContext";

function SaveProperty({ property }) {
  const [heartClicked, setHeartClicked] = useState(false);
  const currentUser = useContext(UserContext);

  useEffect(() => {
    // Check if the property is already saved by the current user
    if (currentUser && property.isSaved) {
      setHeartClicked(true);
    }
  }, [currentUser, property.isSaved]);

  const handleHeartClick = () => {
    if (currentUser) {
      if (heartClicked) {
        // If the property is already saved, remove it from saved list
        FetchService.removePropertyFromSavedList(
          currentUser.accessToken,
          property.id
        )
          .then((response) => console.log(response))
          .catch((error) => console.error(error));
        setHeartClicked(false);
      } else {
        // If the property is not saved, add it to the saved list
        FetchService.addToSavedPropertiesList(
          currentUser.accessToken,
          property.id
        )
          .then((response) => console.log(response))
          .catch((error) => console.error(error));
        setHeartClicked(true);
      }
      // setHeartClicked(!heartClicked);
    } else {
      console.log("Please login to save your property");
    }
  };

  return (
    <div onClick={handleHeartClick} style={{ cursor: "pointer" }}>
      <IoHeartSharp size={25} color={heartClicked ? "red" : "black"} />
    </div>
  );
}

export default SaveProperty;
