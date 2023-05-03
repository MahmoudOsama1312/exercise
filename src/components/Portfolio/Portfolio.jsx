import React from "react";
import "./portfolio.css";
import port from "../../imgs/portfolio/cabin.png";
import cake from "../../imgs/portfolio/cake.png";
import circus from "../../imgs/portfolio/circus.png";
import submarine from "../../imgs/portfolio/submarine.png";
import safe from "../../imgs/portfolio/safe.png";
import game from "../../imgs/portfolio/game.png";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <>
      <div className="portfolio py-5 ">
        <div className="container text-center ">
          <h1 className="text-uppercase">Portfolio</h1>
          <div className="divider2">
            <div className="divider-line2"></div>
            <li className="fa-solid fa-star fa-2x"></li>
            <div className="divider-line2"></div>
          </div>
          <div className="row py-5 ">
            <div className="col-md-6 col-lg-4 col-sm-6 ">
              <div className="portfolio-item  position-relative m-auto">
                <Link to="">
                  <img src={port} alt="cabin" className="img1 position-absolute img-fluid top-0 start-0" />
                  <img src={game} alt="" className="img2 position-absolute img-fluid top-0 start-0" />
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-6 ">
              <div className="portfolio-item  position-relative m-auto">
                <Link to="">
                  <img src={cake} alt="cake" className="img1 position-absolute img-fluid top-0 start-0" />
                  <img src={game} alt="" className="img2 position-absolute img-fluid top-0 start-0" />
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-6">
              <div className="portfolio-item  position-relative m-auto">
                <Link to="">
                  <img src={circus} alt="circus" className="img1 position-absolute img-fluid top-0 start-0" />
                  <img src={game} alt="" className="img2 position-absolute img-fluid top-0 start-0" />
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-6 ">
              <div className="portfolio-item position-relative m-auto ">
                <Link to="">
                  <img src={safe} alt="safe" className="img1 position-absolute img-fluid top-0 start-0 " />
                  <img src={game} alt="" className="img2 position-absolute img-fluid top-0 start-0" />
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-6 ">
              <div className="portfolio-item  position-relative m-auto">
                <Link to="">
                  <img src={game} alt="game" className="img1 position-absolute img-fluid top-0 start-0" />
                  <img src={game} alt="" className="img2 position-absolute img-fluid top-0 start-0" />
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-6 ">
              <div className="portfolio-item  position-relative m-auto" >
                <Link to="">
                  <img src={submarine} alt="submarine" className="img1 position-absolute img-fluid top-0 start-0" />
                  <img src={game} alt="" className="img2 position-absolute img-fluid top-0 start-0" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
