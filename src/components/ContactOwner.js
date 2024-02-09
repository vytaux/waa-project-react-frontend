import React, {useContext, useRef} from "react";
import FetchService from "../service/FetchService";
import UserContext from "../context/UserContext";

const ContactOwner = ({ propertyDetails }) => {

  const currentUser = useContext(UserContext);
  const contactOwnerMessage = useRef();

  const handleContactOwner = () => {
    FetchService.createMessageSession(
        currentUser.accessToken,
        propertyDetails.id,
        contactOwnerMessage.current.value
    ).then(() => alert('Message Sent!'));
  }

  return (
      currentUser && (
          <React.Fragment>
            <h3>Send Owner Private Message</h3>
            <div className="form-group">
              <label>Message</label>
              <textarea ref={contactOwnerMessage}></textarea>
            </div>
            <button onClick={handleContactOwner}>Contact owner</button>
            <p>-------------------------------------------------------------------</p>
            <br/>
          </React.Fragment>
      )
  )
};

export default ContactOwner;
