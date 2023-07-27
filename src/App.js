import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";
import MainLayout from "./Layout/MainLayout"
import Home from "./Pages/Home"
import Project from "./Pages/Projects"
import About from "./Pages/About"
import Contact from "./Pages/Contact";
import Login from "./Pages/Login"
import List, { usersLoader } from "./Pages/List";
import Edit, { userByIdLoader } from "./Pages/Edit";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout/>} >
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>} />
        <Route path="projects" element={<Project/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="list" element={<List />} loader={usersLoader}>
          <Route path=":id" element={<Edit />} loader={userByIdLoader} />
        </Route>
        <Route path="edit" element={<Edit />} />
      </Route>
    </Route>
  )
)
const App = () => <RouterProvider router={router} />
export default App;
