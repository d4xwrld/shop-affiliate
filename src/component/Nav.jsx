import React from "react";
import PropTypes from "prop-types";

const Nav = (props) => {
  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0"></div>
      <div className="md:flex bg-white py-4">
        <div>
          <span>shop</span>
        </div>
      </div>
    </>
  );
};

Nav.propTypes = {};

export default Nav;
