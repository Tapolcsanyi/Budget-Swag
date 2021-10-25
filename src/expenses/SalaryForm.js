import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router"
import { getUserById, updateSalary } from "../DataManager";

export const SalaryForm = () => {
    const [user, setUser] = useState({ salary: "", perSaved: "" });
    const [isLoading, setIsLoading] = useState(false);
    const userId = parseInt(sessionStorage.getItem("budget_user"))
    const userEmail = sessionStorage.getItem("budget_email")
    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...user };
        stateToChange[evt.target.id] = evt.target.value;
        setUser(stateToChange);
    };

    const updateCompletedTask = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedUser = {
            id: userId,
            salary: user.salary,
            perSaved: user.perSaved,
            name: sessionStorage.getItem("budget_username"),
            email: userEmail
        };
        console.log(editedUser)
        updateSalary(editedUser)
            .then(sessionStorage.setItem("budget_salary", user.salary))
            .then(sessionStorage.setItem("budget_saving", user.perSaved))
            .then(() => history.push("/")
            )
    }

    useEffect(() => {
        getUserById(userId)
            .then(user => {
                setUser(user);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="number"
                            required
                            className=""
                            onChange={handleFieldChange}
                            id="salary"
                            value={user.salary}
                        />
                        <label htmlFor="salary">Salary</label>
                    </div>
                        <div className="formgrid">
                        <input
                            type="number"
                            required
                            className=""
                            onChange={handleFieldChange}
                            id="perSaved"
                            value={user.perSaved}
                        />
                    
                        <label htmlFor="perSaved">Percent Saved</label>
                    </div>
                    <div className="">
                     
                    </div>
                    <div>
                        <button type="button" onClick={updateCompletedTask}>Update</button>
                        <button onClick={() => history.push("/")}>Cancel</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}
