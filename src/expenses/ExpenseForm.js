import React from "react"
import { useState } from "react";
import { useHistory } from "react-router";
import { addExpense } from "../DataManager";

export const ExpenseForm = () => {

    const [expense, setExpense] = useState({
		name: "",
		amount: "",
        typeId: 1,
        userId: sessionStorage.getItem("budget_user"),
		
	});

    const history = useHistory();

    const handleControlledInputChange = (event) => {
	
		const newExpense = { ...expense }
		let selectedVal = event.target.value
		
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
	
		newExpense[event.target.id] = selectedVal
		
		setExpense(newExpense)
	}

    const handleClickSaveTask = (event) => {
		event.preventDefault() 

	
			addExpense(expense)
				.then(() => history.push("/"))
		}

    return (

        <form className="">
            <h2 className="">add a new expense</h2>
            <fieldset className="">
                <div className="">
                    <label htmlFor=""></label>
                    <input type="text" id="name" onChange={handleControlledInputChange} className="" placeholder="expense name" />
                </div>
            </fieldset>

            <fieldset className="taskform-fieldset">
                <div className="form-group">
                    <label htmlFor="amount">Completion Date</label>
                    <input type="number" id="amount" onChange={handleControlledInputChange}className="form-control" placeholder="expense cost" />
                </div>
            </fieldset>
            <button className=""
                onClick={handleClickSaveTask}>
                add expense
            </button>
        </form>

    )
}






