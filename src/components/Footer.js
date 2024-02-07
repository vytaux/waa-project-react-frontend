import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import hasRole from "../util/hasRole";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-info">NextHome © 2023</div>
                <div className="footer-developers">
                    🥳 Developed by
                    <a href="https://github.com/vytaux">Vytautas Asmantavicius</a>
                    <a href="https://github.com/Aakartion">Aakarshan Simkhada</a>
                    <a href="https://github.com/sameerstha0012">Basanta</a>
                    <a href="https://github.com/sanjeev-thapa">Sanjeev</a>
                    <a href="https://github.com/TanzimFK">Tanzim</a>
                </div>
            </div>
        </footer>
    )
}


export default Footer;