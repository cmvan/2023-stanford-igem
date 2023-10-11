import React from "react";
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';
import GoUp from './GoUp';

function Template({ title, children }) {
  return (
    <>
      <Navbar />
      <div className="row title">
        <h1 id="title-name">{title}</h1>
      </div>
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
