import React, { useState } from "react"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./NavBar" 

export const Budget = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("nutshell_user") !== null)

  const setAuthUser = (user) => {
    sessionStorage.setItem("budget_user", user.id)
    sessionStorage.setItem("budget_username", user.name)
    sessionStorage.setItem("budget_email", user.email)
    sessionStorage.setItem("budget_salary", user.salary)
    sessionStorage.setItem("budget_saving", user.perSaved)
    setIsAuthenticated(sessionStorage.getItem("budget_user") !== null)
  }

  const clearUser = () => {
    sessionStorage.clear();
    setIsAuthenticated(sessionStorage.getItem("budget_user") !== null)
  }

    return (
      <>
        <NavBar />
        <ApplicationViews clearUser={clearUser} setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} />
      </>
    )

}
