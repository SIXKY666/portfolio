import React from "react";
import NavBar from "./NavBar";
import "../index.css"
export default function Register() {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const obj = { "name": name, "email": email, "password": password }

        try {
            await fetch('/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .then(window.location.href = "/list")
                .catch(error => console.error(error));
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <>
            <NavBar />
            <div className="content">
                <div className="card flex flex-col drop-shadow-md justify-center justify-items-center items-center">
                    <h1 className="text-3xl font-bold">Register</h1>
                    <div className="form">
                        <form>
                            <div className="mb-6">
                                <div>
                                    <label htmlFor="name" className="label">Name</label>
                                    <input type="text" id="name" className="input" placeholder="Name" required></input>
                                </div>
                                <div>
                                    <label htmlFor="email" className="label">Email</label>
                                    <input type="email" id="email" className="input" placeholder="Email" required></input>
                                </div>
                                <div>
                                    <label htmlFor="password" className="label">Password</label>
                                    <input type="password" id="password" className="input" placeholder="password" required></input>
                                </div>
                            </div>
                            <button type="submit" onClick={event => handleSubmit(event)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}