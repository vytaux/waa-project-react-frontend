import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import FetchService from "../../service/FetchService";
import hasRole from "../../util/hasRole";
import ContactOwner from "../ContactOwner";
import SubmitOffer from "../SubmitOffer";
import UserContext from "../../context/UserContext";
import './PropertyDetails.css';

const PropertyDetails = () => {

  const currentUser = useContext(UserContext);

  const { slug } = useParams();
  const [propertyDetails, setPropertyDetails] = useState({});

  useEffect(() => {
    FetchService.getPropertyBySlug(slug).then((response) =>
      setPropertyDetails(response.data)
    );
  }, [slug]);

  return (
    <div className="flex property-details-content" style={{ flexGrow: 1 }}>
        <div className="property-details w-full" style={{marginBottom: "40px"}}>
            <h2 style={{
                fontSize: '24px', // Larger font size for emphasis
                fontWeight: 'bold', // Bold to make it prominent
                color: '#2c3e50', // A deep blue-gray for a professional look
                marginBottom: '0px', // Space below the title for better separation
                letterSpacing: '1px', // Slight letter spacing for a modern feel
            }}>
                {propertyDetails.name}
            </h2>

            <h3
                style={{
                    fontSize: "1rem", // Slightly smaller than the main title
                    fontStyle: "italic", // Italicizes the text for a subtitle look
                    color: "#6c757d", // Grey color for a softer, secondary appearance
                    marginTop: "4px", // Adds spacing between the title and subtitle
                    marginBottom: "1rem", // Adds spacing below the subtitle
                    fontWeight: "400", // Regular weight to avoid overpowering the main title
                }}
            >
                {propertyDetails.shortDescription}
            </h3>

            <div
                className="pictures"
                style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 3fr', // Explicit column ratio,
                    gap: '1rem',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    gridAutoFlow: 'dense' // Added for better control
                }}
            >
                {/* Thumbnail 1 - Now appears first visually */}
                <img
                    style={{
                        width: '100%',
                        height: '130px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease',
                        gridColumn: '1 / 2',
                        gridRow: '1 / 2'
                    }}
                    src="/2.webp"
                    alt="Property interior"
                    className="thumbnail"
                />

                {/* Thumbnail 2 */}
                <img
                    style={{
                        width: '100%',
                        height: '130px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease',
                        gridColumn: '1 / 2',
                        gridRow: '2 / 3'
                    }}
                    src="/3.webp"
                    alt="Property exterior"
                    className="thumbnail"
                />

                {/* Main Image - Now appears on the right */}
                <img
                    style={{
                        width: '100%',
                        height: '280px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease',
                        gridColumn: '2 / 3',
                        gridRow: '1 / 3'
                    }}
                    src="/1.webp"
                    alt="Main property view"
                    className="thumbnail"
                />
            </div>

            {/*Icons*/}

            <div className="features">
                <div style={{display: "flex", alignItems: "center", }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        focusable="false"
                        style={{
                            width: "24px",
                            height: "24px",
                            fill: "#9CA3AF",
                            marginRight: "8px",
                        }}
                    >
                        <g>
                            <path
                                d="M240,208H224V136l2.34,2.34A8,8,0,0,0,237.66,127L139.31,28.68a16,16,0,0,0-22.62,0L18.34,127a8,8,0,0,0,11.32,11.31L32,136v72H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM48,120l80-80,80,80v88H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48Zm96,88H112V160h32Z"/>
                        </g>
                    </svg>
                    <p style={{fontSize: "0.875rem", color: "#6B7280", margin: 0}}>
                        Single-Family
                    </p>
                </div>
                <div style={{display: "flex", alignItems: "center", }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        focusable="false"
                        style={{
                            width: "24px",
                            height: "24px",
                            fill: "#9CA3AF",
                            marginRight: "8px",
                        }}
                    >
                        <g>
                            <path
                                d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z"/>
                        </g>
                    </svg>
                    <p style={{fontSize: "0.875rem", color: "#6B7280", margin: 0}}>
                        built in 2012
                    </p>
                </div>
                <div style={{display: "flex", alignItems: "center", }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        focusable="false"
                        style={{
                            width: "24px",
                            height: "24px",
                            fill: "#9CA3AF",
                            marginRight: "8px",
                        }}
                    >
                        <g>
                            <path
                                d="M235.32,73.37,182.63,20.69a16,16,0,0,0-22.63,0L20.68,160a16,16,0,0,0,0,22.63l52.69,52.68a16,16,0,0,0,22.63,0L235.32,96A16,16,0,0,0,235.32,73.37ZM84.68,224,32,171.31l32-32,26.34,26.35a8,8,0,0,0,11.32-11.32L75.31,128,96,107.31l26.34,26.35a8,8,0,0,0,11.32-11.32L107.31,96,128,75.31l26.34,26.35a8,8,0,0,0,11.32-11.32L139.31,64l32-32L224,84.69Z"/>
                        </g>
                    </svg>
                    <p style={{fontSize: "0.875rem", color: "#6B7280", margin: 0}}>
                        2,100 sq ft
                    </p>
                </div>
                <div style={{display: "flex", alignItems: "center", }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        focusable="false"
                        style={{
                            width: "24px",
                            height: "24px",
                            fill: "#9CA3AF",
                            marginRight: "8px",
                        }}
                    >
                        <g>
                            <path
                                d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM240,56H16a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V64A8,8,0,0,0,240,56ZM193.65,184H62.35A56.78,56.78,0,0,0,24,145.65v-35.3A56.78,56.78,0,0,0,62.35,72h131.3A56.78,56.78,0,0,0,232,110.35v35.3A56.78,56.78,0,0,0,193.65,184ZM232,93.37A40.81,40.81,0,0,1,210.63,72H232ZM45.37,72A40,40,81,0,1,1,24,93.37V72ZM24,162.63A40.81,40.81,0,0,1,45.37,184H24ZM210.63,184A40.81,40.81,0,0,1,232,162.63V184Z"/>
                        </g>
                    </svg>
                    <p style={{fontSize: "0.875rem", color: "#6B7280", margin: 0}}>
                        $200 per sq ft
                    </p>
                </div>
                <div style={{display: "flex", alignItems: "center", }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        focusable="false"
                        style={{
                            width: "24px",
                            height: "24px",
                            fill: "#9CA3AF",
                            marginRight: "8px",
                        }}
                    >
                        <g>
                            <path
                                d="M240,192h-8V98.67a16,16,0,0,0-7.12-13.31l-88-58.67a16,16,0,0,0-17.75,0l-88,58.67A16,16,0,0,0,24,98.67V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,98.67,128,40l88,58.66V192H192V136a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8v56H40ZM176,144v16H136V144Zm-56,16H80V144h40ZM80,176h40v16H80Zm56,0h40v16H136Z"/>
                        </g>
                    </svg>
                    <p style={{fontSize: "0.875rem", color: "#6B7280", margin: 0}}>
                        2 garage spaces
                    </p>
                </div>
                <div style={{display: "flex", alignItems: "center", }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        focusable="false"
                        style={{
                            width: "24px",
                            height: "24px",
                            fill: "#9CA3AF",
                            marginRight: "8px",
                        }}
                    >
                        <g>
                            <path
                                d="M240,96H208a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8H64V52A12,12,0,0,1,76,40a12.44,12.44,0,0,1,12.16,9.59,8,8,0,0,0,15.68-3.18A28.32,28.32,0,0,0,76,24,28,28,0,0,0,48,52V96H16a8,8,0,0,0-8,8v40a56.06,56.06,0,0,0,56,56v16a8,8,0,0,0,16,0V200h96v16a8,8,0,0,0,16,0V200a56.06,56.06,0,0,0,56-56V104A8,8,0,0,0,240,96Zm-48,8v32H144V104Zm40,40a40,40,0,0,1-40,40H64a40,40,0,0,1-40-40V112H128v32a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V112h24Z"/>
                        </g>
                    </svg>
                    <p style={{fontSize: "0.875rem", color: "#6B7280", margin: 0}}>
                        4 bathrooms
                    </p>
                </div>
                <div style={{display: "flex", alignItems: "center", }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        focusable="false"
                        style={{
                            width: "24px",
                            height: "24px",
                            fill: "#9CA3AF",
                            marginRight: "8px",
                        }}
                    >
                        <g>
                            <path
                                d="M216,72H32V48a8,8,0,0,0-16,0V208a8,8,0,0,0,16,0V176H240v32a8,8,0,0,0,16,0V112A40,40,0,0,0,216,72ZM32,88h72v72H32Zm88,72V88h96a24,24,0,0,1,24,24v48Z"/>
                        </g>
                    </svg>
                    <p style={{fontSize: "0.875rem", color: "#6B7280", margin: 0}}>
                        3 bedrooms
                    </p>
                </div>
            </div>

            {/*Description*/}

            <div
                style={{
                    fontSize: "1rem",
                    lineHeight: "1.8",
                    color: "#495057",
                    fontWeight: "400",
                    textAlign: "justify",
                    wordSpacing: "0.05rem",
                    letterSpacing: "0.02rem",
                    marginBottom: "1.5rem",
                }}
            >
                {/* Main Header */}
                <h3
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        color: "#212529",
                        marginBottom: "1rem",
                        textAlign: "center",
                    }}
                >
                    Welcome to Your Dream Home
                </h3>

                {/* Introductory Paragraph */}
                <p style={{marginBottom: "1.5rem"}}>
                    {propertyDetails.description}
                </p>

                {/* Key Features */}
                <h4
                    style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        color: "#333",
                        marginTop: "1rem",
                        marginBottom: "0.5rem",
                    }}
                >
                    Key Features:
                </h4>

                <ul style={{paddingLeft: "1.5rem", marginBottom: "1rem"}}>
                    <li style={{marginBottom: "0.75rem"}}>
                        <strong >Spacious Living Areas:</strong> Enjoy an open-concept design
                        with high ceilings, hardwood floors, and expansive windows that invite abundant natural light.
                    </li>
                    <li style={{marginBottom: "0.75rem"}}>
                        <strong >Gourmet Kitchen:</strong> Featuring stainless steel
                        appliances, granite countertops, and a generous island perfect for culinary adventures and
                        entertaining.
                    </li>
                    <li style={{marginBottom: "0.75rem"}}>
                        <strong >Luxurious Bedrooms:</strong> Three elegantly designed
                        bedrooms offering ample closet space and serene views of the surrounding landscape.
                    </li>
                    <li style={{marginBottom: "0.75rem"}}>
                        <strong >Modern Bathrooms:</strong> Two meticulously appointed
                        bathrooms with premium fixtures, marble accents, and rainfall showers.
                    </li>
                    <li style={{marginBottom: "0.75rem"}}>
                        <strong >Outdoor Oasis:</strong> A private backyard featuring lush
                        landscaping, a cozy patio area, and plenty of space for outdoor entertaining.
                    </li>
                </ul>

                {/* Why You'll Love It */}
                <h4
                    style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        color: "#333",
                        marginTop: "1rem",
                        marginBottom: "0.5rem",
                    }}
                >
                    Why You'll Love It:
                </h4>

                <p style={{marginBottom: "1rem"}}>
                    This home is not just a place to live—it's a lifestyle. Located minutes away from top-rated schools,
                    parks, shopping centers, and gourmet dining options, convenience meets comfort here. Whether you're
                    relaxing in the spacious living area or unwinding on the patio, every corner of this property is
                    designed to elevate your everyday life.
                </p>

            </div>
        </div>
        {!hasRole(currentUser, "OWNER") && (
            // extra div to grow together with the sibling (flex-grow) and inner div fills with 100%
            <div>
                <div className="form offerForm">
                    <ContactOwner propertyDetails={propertyDetails}/>
                    <SubmitOffer propertyDetails={propertyDetails}/>
                </div>
            </div>
        )}
    </div>
  );
};

export default PropertyDetails;
