import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import { navigate } from "@reach/router";


const SingleUser = (props) => {
    const [User, setUser] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${props._id}`)
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    })

    console.log(User)
    return (
        <div>
            <Link to="/" className="btn btn-info btn-lg">Main Page</Link>
            <h1>Username: {User.username}</h1>
            <h1>Password: {User.password}</h1>
            <h1>First Name: {User.firstName}</h1>
            <h1>Last Name: {User.lastName}</h1>
            <h1>Street Address: {User.streetAdress}</h1>
            <h1>City: {User.city}</h1>
            <h1>State: {User.state}</h1>
            <h1>Zip Code: {User.zipCode}</h1>
            <h1>Email: {User.email}</h1>
            <h1>Orders: </h1>

        </div>
    )


}

export default SingleUser;