import React, { useEffect } from "react"
import { useState } from "react";
import { useHistory } from "react-router";
import { addExpense, getAllTypes } from "../DataManager";

export const ExpenseForm = () => {

    const [types, setTypes] = useState([])
    const [expense, setexpense] = useState({
		name: "",
		amount: "",
        typeId: 0,
        userId: parseInt(sessionStorage.getItem("budget_user")),
		
	});

    const history = useHistory();

    const getTypes = () => {
        return getAllTypes().then(res => {
            setTypes(res)
        })
    }

    const handleControlledInputChange = (event) => {
	
		const newExpense = { ...expense }
		let selectedVal = event.target.value
		
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
	
		newExpense[event.target.id] = selectedVal
		
		setexpense(newExpense)
	}

    useEffect(() => {
        getTypes();
    }, [])

    const handleClickSaveTask = (event) => {
		event.preventDefault() 

	
			addExpense(expense)
				.then(() => history.push("/"))
		}

    return (

        <form className="">
            <h2 className="">Add A New Expense</h2>
            <fieldset className="">
                <div className="">
                    <input type="text" id="name" onChange={handleControlledInputChange} className="" placeholder="Expense Name" />
                </div>
            </fieldset>

            <fieldset className="taskform-fieldset">
                <div className="form-group">
                    <input type="number" id="amount" onChange={handleControlledInputChange} className="" placeholder="Expense Cost" />
                </div>

                <div>
                    <select id="typeId" onChange={handleControlledInputChange} placeholder="type">
                        <option selected disabled value="0" >Expense Type</option>
                        {types.map(type => <option key={type.id} value={type.id}>{type.name}</option>)}
                    </select>
                </div>
            </fieldset>
            <button className=""
                onClick={handleClickSaveTask}>
                Add Expense
            </button>
            <button onClick={() => history.push("/")}>Cancel</button>
        </form>

    )
}






