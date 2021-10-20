import react, {useState} from "react";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./nav/ApplicationViews";

export const Budget = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("user") !== null)

  const setAuthUser = (user) => {
    sessionStorage.setItem("user", user.id)
    sessionStorage.setItem("username", user.name)
    setIsAuthenticated(sessionStorage.getItem("user") !== null)
  }

  const clearUser = () => {
    sessionStorage.clear();
    setIsAuthenticated(sessionStorage.getItem("user") !== null)
  }

    return (
      <>
        <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated} />
        <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} />
      </>
    )

}