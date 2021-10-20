//Author: Matt, Purpose: To not allow access to user if they are not logged in

import React, {useState} from "react"
import { Redirect } from "react-router"
import { Route } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { ExpenseCard } from "./expenses/Expense"

export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {
  return (
    <>

      <Route exact path="/">
        {isAuthenticated ? <ExpenseCard /> : <Redirect to="/login" />}
      </Route>

      <Route exact path="/login">
        <Login setAuthUser={setAuthUser} />
      </Route>

      <Route path="/register">
        <Register setAuthUser={setAuthUser} />
      </Route>

    </>
  )
}
