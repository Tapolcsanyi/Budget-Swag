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
        <>
<h2 className="salaryName">Add A New Expense</h2>


        <form className="salaryContainer">

            

            <fieldset className="">

                <div className="salaryFormContainer3">
                    <h2 className="salaryName">Expense Name</h2>
                    <h2 className="salaryName">Expense Cost</h2>
                    <h2 className="salaryName">Expense Type</h2>
                </div>

                <div className="salaryFormContainer">
                <div className="formInput">
                    <input type="text" id="name" onChange={handleControlledInputChange} className="" placeholder="Expense Name" />
                </div>

                <div className="formInput">
                    <input type="number" id="amount" onChange={handleControlledInputChange} className="" placeholder="Expense Cost" />
                </div>

                <div className="formInput">
                    <select className="" id="typeId" onChange={handleControlledInputChange}>
                        <option selected disabled value="0" >Expense Type</option>
                        {types.map(type => <option key={type.id} value={type.id}>{type.name}</option>)}
                    </select>
                </div>
                </div>
            <div className="salaryFormContainer2">
                <button className="budgetButton" onClick={handleClickSaveTask}>Add Expense</button>
                <button className="budgetButton" onClick={() => history.push("/")}>Cancel</button>
            </div>
            </fieldset>
        </form>
        </>

    )
}






