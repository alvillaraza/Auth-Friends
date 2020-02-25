import React from "react";
import Form from "./Form";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // const token = window.localStorage.getItem("token");
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log('res', res.data);

        this.setState({
            friends: res.data          
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
        <div>
            {/* need to return list of friends here */}
            {console.log(this.state.friends)}
            {this.state.friends.map(i => {
                return <div>
                    <p>{i.name}</p>
                    <p>{i.email}</p>
                    <p>{i.age}</p>
                </div>
            })}
        <Form />
      </div>
    );
  }
}

export default FriendsList;
