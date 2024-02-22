import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Copyright © 2023 All rights reserved <br></br>
                    Created By Yogesh Kumar <br></br>
                    yogi.kumar2023@gmail.com <br></br>
                    +91 7291943200
                </div>
                <div className="socialIcons">
                    <a href="https://www.facebook.com/yogesh.chhillar.735" target="_blank" rel="noopener noreferrer" className="icon-link">
                        <span className="icon">
                            <FaFacebookF />
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/in/yogesh-kumar-2898b8195/" target="_blank" rel="noopener noreferrer" className="icon-link">
                        <span className="icon">
                            <FaLinkedin />
                        </span>
                    </a>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
