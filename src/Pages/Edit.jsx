import React from "react";
import { useLoaderData } from "react-router-dom";
export default function Edit() {
    const user = useLoaderData()
    console.log(user);
    return (
        <>
            <h1 className="text-3xl font-bold">{user.name}</h1>
        </>
    );
}
export const userByIdLoader = async ({ params }) => {
    const { id } = params;
    const res = await fetch("/users/" + id);
    let user = await res.json()
    if (!res.ok) {
        throw Error(user.error)
    }
    return user;
}