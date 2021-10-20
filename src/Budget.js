import React, { useState } from "react"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"

export const Budget = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("nutshell_user") !== null)

  const setAuthUser = (user) => {
    sessionStorage.setItem("budget_user", user.id)
    sessionStorage.setItem("budget_username", user.name)
    setIsAuthenticated(sessionStorage.getItem("budget_user") !== null)
  }

  const clearUser = () => {
    sessionStorage.clear();
    setIsAuthenticated(sessionStorage.getItem("budget_user") !== null)
  }

    return (
      <>
        <ApplicationViews clearUser={clearUser} setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} />
      </>
    )

}
