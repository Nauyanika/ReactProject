import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserNavBar from "./component/UserNavBar";
import Name from "./component/Name";
import axios from "axios";
import { Card } from "react-bootstrap";
import UserCard from "./component/UserCard";
/*import Vegetables from "./component/Vegetables";*/
function App() {
  var data = [];
  const [userData, setUserData] = useState([]);
  console.log(userData);
  const getUserList = () => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then(function (response) {
        // handle success
        console.log(response.data.data);
        data = response.data.data;
        setUserData(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <>
      <UserNavBar getUserList={getUserList} />
      {/* <Vegetables />*/}
      <UserCard userData={userData} />
    </>
  );
}

export default App;
