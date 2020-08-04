import React, { useEffect } from "react";
import { Admin } from "./Admin";
import { Menu } from "./components/Menu/Menu";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { useSelector } from "react-redux";
import { Login } from "./components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export const App = () => {
  const authAcc = useSelector((store) => store.auth.currentUser.token);
  useEffect(() => {
    console.log(authAcc);
  }, [authAcc]);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Container fluid className="main-container">
          <Row>
            <Col lg="12" className="top_menu">
              <Menu isAuth={authAcc} />
            </Col>
            <Route exact path="/login" component={Login} />
            <PrivateRoute
              path="/admin"
              component={Admin}
              authed={authAcc}
              exact
            />
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
};
