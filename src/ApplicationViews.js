//Author: Matt, Purpose: To not allow access to user if they are not logged in

import React, {useState} from "react"
import { Redirect, useHistory } from "react-router"
import { Route } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { SalaryForm } from "./expenses/SalaryForm"
import { ExpenseForm } from "./expenses/ExpenseForm"
import { ExpenseList } from "./expenses/ExpenseList"
import { ExpenseEditForm } from "./expenses/ExpenseEditForm"

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

      <Route exact path="/register">
        <Register setAuthUser={setAuthUser} />
      </Route>

      <Route exact path="/expenseform">
        <ExpenseForm />
      </Route>

      <Route path="/expenses/:expenseId(\d+)/edit">
        {isAuthenticated ? <ExpenseEditForm />: <Redirect to="/login" />}
      </Route>

      <Route exact path="/salaryform">
        <SalaryForm />
      </Route>

    </>
  )
}
