import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary text-uppercase lead py-3 fw-normal navbar-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Start React
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about">
                                    about
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="portfolio">
                                    portfolio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact">
                                    contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
