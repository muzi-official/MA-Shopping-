import React from "react";
import "./Footer.css";
import { Container, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Container fluid className="fixed-bottom bottom-0">
        <Row className="align-items-center justify-content-center text-center">
          <footer className="footer align-items-center justify-content-center text-center">
            Developer&nbsp;&nbsp;
            <a href="https://www.facebook.com/officialmuzi" target="blank">
              Muzammil
            </a>
            &nbsp;&nbsp;MA Shopping © 2022
          </footer>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
