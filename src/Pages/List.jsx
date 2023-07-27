import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import "../index.css"
import NavBar from "../Components/NavBar";

export default function List() {
    const data = useLoaderData();
    const navigate = useNavigate();
    const dataList = data.map(item => {
        return (

            <li key={item._id} className="list-li" onClick={() => navigate(`/list/${item._id}`)}>
                name: {item.name} email: {item.email}
            </li>


            // <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            //     {/*  */}
            //     <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            //         <Link key={item._id} to={item._id} >{item._id}</Link>
            //     </th>
            //     <td className="px-6 py-4">
            //         {item.name}
            //     </td>
            //     <td className="px-6 py-4">
            //         {item.email}
            //     </td>
            //     <td className="px-6 py-4">
            //         {item.password}
            //     </td>
            // </tr>

        )
    })
    return (
        <>
            <NavBar />
            <div className="content">
                <div className="card flex flex-col drop-shadow-md justify-center justify-items-center items-center">
                    <h1 className="text-3xl font-bold">List of User</h1>
                    {/* <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Password
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataList}
                        </tbody>
                    </table> */}
                    <ul>
                        {dataList}
                    </ul>
                </div>
            </div>
        </>
    )
}

export const usersLoader = async () => {
    const res = await fetch('/users')
    if (!res.ok) {
        throw Error('Could not fetch users')
    }
    return res;
}