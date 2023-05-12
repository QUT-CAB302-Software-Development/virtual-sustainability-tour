import React from 'react';
import './footer.css';
// installed fontawesome for github icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// TODO: Align Footer Content
const Footer = () => {
  // year should be 2023
  const year = new Date().getFullYear();

  return (
  <footer className="footer">
    <div class="footer-content">
        <a href="https://github.com/QUT-CAB302-Software-Development/web-application-project-techtitans">
          <FontAwesomeIcon icon={faGithub} />
        </a>
    </div>
    <h3>TechTitans</h3>
    <p>{`Copyright © TechTitans ${year}`}</p>
  </footer>
  );
};

// testing
export default Footer;