import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

function UserNavBar(props) {
  const getUserList = props.getUserList;
  return (
    <div>
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">LetsGrowMore</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
                <Button
                  variant="dark"
                  onClick={() => {
                    getUserList();
                  }}
                >
                  Get Users
                </Button>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <center></center>
      </>
    </div>
  );
}

export default UserNavBar;
