import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";

class Navbar extends Component {
    // Bagian untuk men-declare state atau react lifecycle
    render() {
        // Untuk merender tampilan html atau variable/fungsi javascript
        return (
            <div className="navbar">
                <div className="navbar__item">
                    <Link to="/">Class</Link>
                </div>
                <div className="navbar__item">
                    <Link to="/hook">Hook</Link>
                </div>
            </div>
        );
    }
}

export default Navbar;
