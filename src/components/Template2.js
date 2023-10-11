import React from "react";
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';
// import { Link } from 'react-router-dom';
import GoUp from './GoUp';

function Template({ title, children }) {
  return (
    <>
      <Navbar />
      <div className="row body">
        {children}
      </div>
      <Footer />
      <GoUp />
    </>
  )
}

Template.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Template;