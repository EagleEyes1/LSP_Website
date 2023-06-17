import React from "react";
import styles from "./Navbars.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/userSlice";
import { Auth } from "../../utils/Auth";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbars() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/");
  };

  const toDepart = () => {
    navigate("/jabatan");
  };

  const toReport = () => {
    navigate("/laporan");
  };

  const userData = useSelector((state) => state.user.userData);

  const signOut = () => {
    dispatch(logOut);
    Auth.signOut();
    navigate("/login");
  };
  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        style={{ paddingRight: "11%", paddingLeft: "11%" }}
      >
        <Container fluid>
          <Navbar.Brand onClick={toHome}>
            <img
              src={require("../../assets/images/logo.png")}
              style={{
                maxWidth: "60px",
                maxHeight: "60px",
                padding: "13px",
              }}
            />
            Baroqah Inc.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className={styles.linkhome} onClick={toDepart}>
                Jabatan
              </Nav.Link>
              {/* <Nav.Link className={styles.linkhome} onClick={toReport}>
                Laporan
              </Nav.Link> */}
            </Nav>
            <Button variant="outline-warning">About Us</Button>
            <NavDropdown
              style={{ marginLeft: "2%" }}
              title={`Masuk Sebagai ${userData.user[0]?.display_name}`}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item onClick={signOut}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
