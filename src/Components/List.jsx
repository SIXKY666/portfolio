import React, { useState } from "react";
import "../index.css"
import NavBar from "./NavBar";

export default function List() {
    const [data, setData] = useState([]);

    fetch('/users', {
        method: "GET"
    })
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.error(err));

    const dataList = data.map(item => {
        return (
            // <li key={item._id} className="list-li">
            //     name: {item.name} email: {item.email}
            // </li>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item._id}
                </th>
                <td class="px-6 py-4">
                    {item.name}
                </td>
                <td class="px-6 py-4">
                    {item.email}
                </td>
                <td class="px-6 py-4">
                    {item.password}
                </td>
            </tr>
        )
    })
    return (
        <>
            <NavBar />
            <div className="content">
                <div className="card flex flex-col drop-shadow-md justify-center justify-items-center items-center">
                    <h1 className="text-3xl font-bold">List of User</h1>
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Id
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Password
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataList}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}