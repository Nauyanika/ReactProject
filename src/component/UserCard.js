import React from "react";
import { Card } from "react-bootstrap";

function UserCard(props) {
  return (
    <div style={{ display: "flex" }}>
      {props.userData.map((item) => {
        return (
          <Card style={{ width: "18rem", margin: "15px" }}>
            <Card.Img variant="top" src={item.avatar} />
            <Card.Body>
              <Card.Title>User {item.id}</Card.Title>
              <Card.Text>
                <b>
                  {" "}
                  Name: {item.first_name} {item.last_name} <br />
                  Email: {item.email}{" "}
                </b>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default UserCard;
