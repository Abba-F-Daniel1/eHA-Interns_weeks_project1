import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

const Footer: React.FC = () => {
  return (
    <footer className="App-footer border-t-[1px] border-t-[#3F#E45]">
      <div className="footer__container container">
        <ul className="footer__list">
          <li className="footer__list-item">
            <Link smooth to="/abba-portfolio#about" className="footer__link dark:text-gray-200">
              About
            </Link>
          </li>
          <li className="footer__list-item">
            <Link smooth to="/abba-portfolio#skills" className="footer__link dark:text-gray-200">
              Skills
            </Link>
          </li>
          <li className="footer__list-item">
            <Link smooth to="/abba-portfolio#contact" className="footer__link dark:text-gray-200">
              Contact
            </Link>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/"
            className="footer__social-link dark:bg-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram dark:bg-cyan-500"></i>
          </a>
          <a
            href="https://twitter.com/"
            className="footer__social-link dark:bg-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-twitter dark:bg-cyan-500"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/abba-frederick-daniel-724817254/"
            className="footer__social-link  dark:bg-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin dark:bg-cyan-500"></i>
          </a>
        </div>
        <span className="footer__copy text-lg py-2 leading-8 dark:text-gray-200">© All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
