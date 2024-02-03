import React from 'react';
import './Footer.css';
import { SiMercedes, SiToyota, SiAudi, SiMazda, SiRenault, SiPeugeot, SiCitroen, SiVolkswagen } from 'react-icons/si';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__person-container">
        <div className="footer__person">
          <img src={'./mirado.jpg'} alt="Person 1" className="footer__person-image" />
          <p>Mirado 1905</p>
        </div>
        <div className="footer__person">
          <img src={'./oni.jpg'} alt="Person 2" className="footer__person-image" />
          <p>Onintsoa 1767</p>
        </div>
        <div className="footer__person">
          <img src={'./mahery.jpg'} alt="Person 3" className="footer__person-image" />
          <p>Mahery 1758</p>
        </div>
        <div className="footer__person">
          <img src={'./yohan.jpg'} alt="Person 4" className="footer__person-image" />
          <p>Yohan 1795</p>
        </div>
      </div>
      {/* <div className="footer__text-container">
        <p>Email: reprizy@gmail.com</p>
        <p>Address: ITU Andoharanofotsy</p>
        <p>S5 Cloud project</p>
        <p>Contact: <a href="#">+123 456 789</a></p>
      </div> */}
      <div className="footer__logo-container">
        <div className="footer__person">
          <img src={'./audi.svg'} alt="Person 4" className="footer__logo-image" />
        </div>
        <div className="footer__person">
          <img src={'./toyota.svg'} alt="Person 4" className="footer__logo-image" />
        </div>
        <div className="footer__person">
          <img src={'./volkswagen.svg'} alt="Person 4" className="footer__logo-image" />
        </div>
        <div className="footer__person">
          <img src={'./peugeot.svg'} alt="Person 4" className="footer__logo-image" />
        </div>
        <div className="footer__person">
          <img src={'./mercedes.svg'} alt="Person 4" className="footer__logo-image" />
        </div>
        <div className="footer__person">
          <img src={'./renault.svg'} alt="Person 4" className="footer__logo-image" />
        </div>
        <div className="footer__person">
          <img src={'./maserati.svg'} alt="Person 4" className="footer__logo-image" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
