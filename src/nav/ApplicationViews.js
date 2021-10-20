//Author: Matt, Purpose: To not allow access to user if they are not logged in

import React, {useState} from "react"
import { Router } from "react-router"
import { Route } from "react-router-dom"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"

export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {
  return (
    <>
      <Route exact path="/login">
        <Login setAuthUser={setAuthUser} />
      </Route>

      <Route path="/register">
        <Register setAuthUser={setAuthUser} />
      </Route>
    </>
  )
}
