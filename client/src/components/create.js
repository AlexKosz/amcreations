import React, { useState } from "react";
import { Link } from "@reach/router";
import { navigate } from "@reach/router";
import Form from "../components/Form";
import axios from "axios";




const Create = (props) => {

    const [form, setForm] = useState({
        name: "",
        imageURL: "",
        treasures: "",
        catchPhrase: "",
        position: "",
        peg: true,
        patch: true,
        hook: true
    })

    const [errors, setErrors] = useState({})

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/users/new", form)
            .then(res => {
                console.log(res)
                if (res.data.error) {
                    console.log("error");
                    setErrors(res.data.error.errors)
                    console.log(errors);
                }
                else {
                    console.log("no error")
                    navigate("/")
                }

            })
            .catch(err => console.log(err))

    }

    return (
        <div>
            <h1>Add a pirate</h1>
            <Link to="/" className="btn btn-info btn-lg">Main Page</Link>
            <Form onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} errors={errors} />
        </div>
    )
}

export default Create;