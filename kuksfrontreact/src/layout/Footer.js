import React from 'react';
import { FaAddressBook } from 'react-icons/fa';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style/Footer.css';
const Footer = () => {
  return (
      <div className="footer-container">
          <footer>
              <hr/>
              <FontAwesomeIcon icon={faEnvelope}/> &nbsp; email: kukvly96@gmail.com
              <br/>
              <FaAddressBook/> &nbsp; Phone: 010-9115-9611
          </footer>
      </div>
  );
};

export default Footer;