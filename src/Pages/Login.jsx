import React from "react";
import {Form,redirect} from "react-router-dom"
import "../index.css"
export default function Register() {

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(event.target);

        // try {
        //     await fetch('/users', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(obj)
        //     })
        //         .then(response => response.json())
        //         .then(data => console.log(data))
        //         .then(window.location.href = "/list")
        //         .catch(error => console.error(error));
        // } catch (e) {
        //     console.log(e);
        // }
    };
    return (
        <>  
            <h1>Login</h1>
            <Form method="post" onSubmit={handleSubmit}>
                <div>
                    
                </div>
            </Form>
        </>
    )
}