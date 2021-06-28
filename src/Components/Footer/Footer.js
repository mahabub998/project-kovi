import React from "react";

const Footer = () => {
  return (
    <div className="main-footer mt-5 bg-secondary ">
      <div className="container ">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h4> lorem ipsum </h4>
            <ul className="list-unStyled">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4> lorem ipsum </h4>
            <ul className="list-unStyled">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4> lorem ipsum </h4>
            <ul className="list-unStyled">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4> lorem ipsum </h4>
            <ul className="list-unStyled">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
        </div>
        {/* Footer Button*/}
        <div className="">
        <p className="text-xs-center">
        &copy; {new Date().getFullYear()} city Guide app .all right reserved
        </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
