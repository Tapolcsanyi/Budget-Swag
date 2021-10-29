import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router"
import { getUserById, updateSalary } from "../DataManager";
import "./Expense.css"

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
            <form className="salaryContainer">

                <fieldset>

                    <div className="salaryFormContainer3">
                        <h2 className="salaryName">Salary</h2>
                        <h2 className="salaryName">Percent Saved</h2>
                    </div>

                    <div className="salaryFormContainer">
                    <div className="formInput">
                        <input
                            type="number"
                            required
                            className=""
                            onChange={handleFieldChange}
                            id="salary"
                            value={user.salary}
                        />
                    </div>

                    <div className="formInput">
                        <input
                            type="number"
                            required
                            className=""
                            onChange={handleFieldChange}
                            id="perSaved"
                            value={user.perSaved}
                        />
                    </div>
                    </div>

                    <div className="salaryFormContainer2">
                        <button className="budgetButton" type="button" onClick={updateCompletedTask}>Update</button>
                        <button className="budgetButton" onClick={() => history.push("/")}>Cancel</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}
