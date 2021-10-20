//Author: Matt, Purpose: To not allow access to user if they are not logged in

import React, {useState} from "react"
import { Redirect, useHistory } from "react-router"
import { Route } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { ExpenseList } from "./expenses/ExpenseList"

export const ApplicationViews = ({ clearUser, isAuthenticated, setAuthUser }) => {

  const history = useHistory()

  const handleLogout = () => {
    const retVal = window.confirm("Are you sure you want to Logout?")
    
    if(retVal == true){
    history.push('/login');
    clearUser();
    } else {
      return false
    }
  }

  return (
    <>

          {isAuthenticated ?
          <li className="nav-item" >
            <button className="nav-link" onClick={handleLogout} >Logout</button>
          </li>
          : null}

      <Route exact path="/">
        {isAuthenticated ? <ExpenseList /> : <Redirect to="/login" />}
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
