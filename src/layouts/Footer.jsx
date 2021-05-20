import React from "react";
import "../assets/styles/footer.css";

const Footer = (props) => {
    // console.log("props footer", props);
    return (
        <div className="footer">
            <div>{props.content}</div>
            {props.children}
        </div>
    );
};

export default Footer;
