import { Link } from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { HomeContext } from "../contexts/HomeProvider";

function MenuNavbar() {
  const { basketCount, setSearchWord, searchWord, getProducts } =
    React.useContext(HomeContext);

  React.useEffect(() => {
    getProducts();
  }, [searchWord]);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Link className="logo" to="/">
            StayHome
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="menu-navbar" to="/">
                Главная Страница
              </Link>

              <Link className="menu-navbar" to="/admin">
                Панель управления
              </Link>
              <Link className="menu-navbar" to="/info">
                О компании
              </Link>
            </Nav>
            {/* <ShoppingCartOutlinedIcon /> */}

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Поиск"
                className="me-2"
                aria-label="Search"
                value={searchWord}
                onChange={(e) => {
                  setSearchWord(e.target.value);
                }}
              />

              <Button variant="outline-secondary">Поиск</Button>
            </Form>
            <Link to="/basket">
              <IconButton>
                <Badge badgeContent={basketCount} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MenuNavbar;
