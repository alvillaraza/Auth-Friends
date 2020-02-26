import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Form from './Form'

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
          .get("/api/friends")
          .then(res => {
            console.log("res.data", res.data);
    
            this.setState({friends: res.data});
          })
          .catch(err => console.log(err));
  };
  


    render() {
        return (
            <div>
            <Form getData={this.getData} />
                {this.state.friends.map(i => {
                  return (
                    <div key={i.name}>
                      <p>{i.name}</p>
                      <p>{i.email}</p>
                      <p>{i.age}</p>

                    </div>
                  );
                })}
            </div>
          );
    }
}

export default FriendsList;