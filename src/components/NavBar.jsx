import React from "react";

const NavBar = (props) => (
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <h5 className="my-0 mr-md-auto font-weight-normal">{props.companyName}</h5>
    <nav className="my-2 my-md-0 mr-md-3">
      {/* <a className="p-2 text-dark" href="#">{props.features}</a>
      <a className="p-2 text-dark" href="#">{props.enterprise}</a>
      <a className="p-2 text-dark" href="#">{props.support}</a>
      <a className="p-2 text-dark" href="#">{props.pricing}</a> */}
    </nav>
    {/* <Link to="">
      <a href="#">Sign up</a>
    </Link> */}
  </div>
);

export default NavBar;
