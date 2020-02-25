import React, { useState, useContext } from 'react';
// import { FriendContext } from '../contexts/FriendContext';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// const Form = () => {
//     const data = useContext(FriendContext);
//     const [newFriend, setNewFriend] = useState({
//         id: Date.now(),
//         name: "",
//         age: "",
//         email: "",
//       });

class Form extends React.Component {
    state = {
        friends: {
            id: Date.now(),
            name: '',
            age: '',
            email: ''
        }
    };
    
    handleChange = e => {
        //this has to be set state, but should we use useState for this?
        this.setState({
            ...this.friends,
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/friends', this.state.friends)
            .then(res => {
                window.localStorage.setItem('token', res.data.payload);
            })
    };
   
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            value={this.state.friends.name}
                            onChange={this.handleChange}
                        />
                    </p>
                
                    <p>
                        <input
                            type="text"
                            name="age"
                            placeholder="age"
                            value={this.state.friends.age}
                            onChange={this.handleChange}
                        />
                    </p>
                
                    <p>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            value={this.state.friends.email}
                            onChange={this.handleChange}
                        />
                    </p>
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }
}
export default Form;