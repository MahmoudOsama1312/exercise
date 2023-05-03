import React from "react";
import "./about.css";
export default function About() {
    return (
        <>
            <div className="container-fluid text-cetner about text-white py-5">
                <h1 className="text-uppercase text-center">About</h1>
                <div className="divider">
                    <div className="divider-line"></div>
                    <div className="divider-line"></div>
                </div>
                <div className="row py-5">
                    <div className="col-lg-4 col-md-4 col-sm-4 offset-lg-2 offset-md-2 offset-sm-2">
                        <p className="aboutText lead">
                            Freelancer is a free bootstrap theme created by Route. The
                            download includes the complete source files including HTML, CSS,
                            and JavaScript as well as optional SASS stylesheets for easy
                            customization.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 offset-lg-1 offset-md-1 offset-sm-1">
                        <p className="aboutText lead">
                            You can create your own custom avatar for the masthead, change the
                            icon in the dividers, and add your email address to the contact
                            form to make it fully functional!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
