import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "../../components/Layouts";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export const AllPageFooter = () => {
  function scrollToSelector(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <FOOTER>
      <nav>
        <h4>LOGO</h4>
        <ul>
          <li>
            <Link to="/" onClick={() => scrollToSelector("#hero")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => scrollToSelector("#features")}>
              Features
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => scrollToSelector("#instructions")}>
              Instructions
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => scrollToSelector("#services")}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => scrollToSelector("#cta")}>
              CTA
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
      <div className="socials">
        <div>
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <p>
          <FontAwesomeIcon icon={faCopyright} className="copyright-icon" />
          2023 All rights reserved
        </p>
      </div>
    </FOOTER>
  );
};

const FOOTER = styled.footer`
  background-color: var(--background-dark);
  padding-top: 3rem;
  color: var(--primary-grey);
  margin-top: 5rem;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 0.5rem;
    margin-bottom: 1rem;
  }
  h4 {
    color: var(--primary-white);
  }
  ul {
    display: flex;
    list-style: none;
  }
  ul li {
    margin-inline: 0.5rem;
  }

  ul li a {
    color: var(--primary-grey);
    transition: color 0.2s ease-in;
  }
  ul li a:hover {
    color: var(--primary);
  }
  hr {
    margin-bottom: 1rem;
  }
  div.socials {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
  }
  div.socials > div a {
    color: var(--primary-white);
    font-size: var(--text-paragraph);
    margin-right: 0.75rem;
  }
  div.socials > div a:hover {
    color: var(--primary);
  }

  div.socials > p {
    color: var(--primary-white);
    font-size: var(--button);
  }
  .copyright-icon {
    margin-right: 0.5rem;
  }
`;
