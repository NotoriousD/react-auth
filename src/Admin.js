import React from "react";
import Main from "./Main";
import Navbar from "./components/Navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export const Admin = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Container fluid className="main-container">
          <Row>
            <Col lg="2" className="col-menu">
              <Navbar />
            </Col>
            <Col lg="10">
              <Main />
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
};
