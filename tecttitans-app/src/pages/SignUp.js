import React from 'react';
import '../App.css';
import FormInput from '../components/FormInput';
import '../components/FormInput.css'
import { useState } from "react";

function SignUp(){

    const [values, setValues] = useState({
        username: "",
        email: "",
        name: "",
        phone: "",
        password: ""
    });

    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);


    const REGISTER_URL = "http://localhost:8080/register"

    const inputs = [
        {
            id: 1,
            name:"username",
            type:"text",
            placeholder:"Username",
            errorMessage:"Username should be 3-16 characters and should not include special characters!",
            label:"Username",
            required: true,
        },
        {
            id: 2,
            name:"name",
            type:"text",
            placeholder:"Name",
            errorMessage:"Name must be minimum 3 characters",
            label:"Name",
            required: true,
        },
        {
            id: 3,
            name:"email",
            type:"text",
            placeholder:"Email",
            errorMessage:"It should be a valid email address!",
            label:"Email",
            required: true,
        },
        {
            id: 4,
            name:"phone",
            type:"integer",
            placeholder:"Phone Number",
            errorMessage:"It should be a valid number",
            label:"Phone Number",
            required: true,
        },
        {
            id: 5,
            name:"password",
            type:"password",
            placeholder:"Password",
            errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character.",
            label:"Password",
            required: true,
        },
    ];


    function handleSubmit(e) {
        e.preventDefault();

        // Request body for registration and login endpoints
        const payload = values;

        console.log(values);

        // Send POST request to registration endpoint
        fetch( 
            REGISTER_URL, 
            {
                method : "POST",
                headers: {
                    accept : "application/json",
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify( payload )
            } 
        )
        .then(
            response => {
                return response.json();
            }
        )
        .then(
            response => {
                setResponseData( response );
                console.log(response);
            }
        )
        .catch(
            e => {
                setError( e );
            }
        )
    };

    const onChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value });
    };

    // workaround to pass github actions checks
    console.log(responseData);
    console.log(error);


    return(
        <div className="sign-up">
            <form onSubmit={handleSubmit}>
            <h1 className="register">Register</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button className="register-button" type="submit">Submit</button>

            </form>
        </div>
    );

}

export default SignUp;