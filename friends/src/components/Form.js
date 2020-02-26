import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Form = (props) => {
    console.log('props', props)
    const [newFriend, setNewFriend] = useState({
        id: Date.now(),
        name: "",
        age: "",
        email: "",
      });

    const handleChange = e => {
            setNewFriend({
                ...newFriend,
                [e.target.name]: e.target.value
            });
    };

    const handleSubmit = e => {
      
        e.preventDefault();
        console.log(newFriend);
        
        axiosWithAuth()
        .post("/api/friends", newFriend)
            .then(res => {
                props.getData();
        //   window.localStorage.setItem("token", res.data.payload);
        })
        .catch (err => console.log(err));
    };

    // const putFriend = (id, updatedFriend) => {
    //     axiosWithAuth()
    //       .put(`api/friends/${id}`, updatedFriend)
    //       .then(res => {
            
    //       })
    //       .catch(err => console.log(err));
    //   }

      
   
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <p>
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            value={newFriend.name}
                            onChange={handleChange}
                        />
                    </p>
                
                    <p>
                        <input
                            type="text"
                            name="age"
                            placeholder="age"
                            value={newFriend.age}
                            onChange={handleChange}
                        />
                    </p>
                
                    <p>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            value={newFriend.email}
                            onChange={handleChange}
                        />
                    </p>
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }

export default Form;