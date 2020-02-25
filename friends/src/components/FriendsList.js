import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    id: Date.now(),
    name: "",
    age: "",
    email: "",
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const token = window.localStorage.getItem("token");
    axiosWithAuth()
      .get("/api/data")
      .then(res => {
        console.log(res);
        // this.setState({
        // friends: [...res.data]
        // });
      })
      .catch(err => console.log(err));
  };

  render() {
    return <div></div>;
  }
}

export default FriendsList;
