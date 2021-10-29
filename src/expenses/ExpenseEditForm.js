import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router"
import { editExpense, getAllTypes, getExpenseById } from "../DataManager";

export const ExpenseEditForm = () => {
    const [expense, setExpense] = useState({ name: "", amount: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [types, setTypes] = useState([])

    const history = useHistory();
    const {expenseId} = useParams();

    const handleFieldChange = evt => {
        const stateToChange = { ...expense };
        stateToChange[evt.target.id] = evt.target.value;
        setExpense(stateToChange);
        console.log(evt.target.value)
    };

    const updateExistingExpense = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedExpense = {
            id: expenseId,
            name: expense.name,
            amount: expense.amount,
            typeId: expense.typeId,
            userId: parseInt(sessionStorage.getItem("budget_user"))
        };
        
        editExpense(editedExpense)
            .then(() => history.push("/")
            )
    }

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
		
		setExpense(newExpense)
	}

    useEffect(() => {
        getTypes();
        getExpenseById(expenseId)
            .then(expense => {
                setExpense(expense);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className=""
                            onChange={handleFieldChange}
                            id="name"
                            value={expense.name}
                        />
                        <label htmlFor="name">Expense Name</label>
                    </div>
                        <div className="formgrid">
                        <input
                            type="number"
                            required
                            className=""
                            onChange={handleFieldChange}
                            id="amount"
                            value={expense.amount}
                        />
                    
                        <label htmlFor="amount">Expense Amount</label>
                    </div>

                    <div>
                        <select value={expense.typeId} id="typeId" onChange={handleControlledInputChange} placeholder="type">
                            <option selected disabled value="0" >Expense Type</option>
                            {types.map(type => <option key={type.id} value={type.id}>{type.name}</option>)}
                        </select>
                    </div>

                    <div>
                        <button type="button" onClick={updateExistingExpense}>Update</button>
                        <button onClick={() => history.push("/")}>Cancel</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}
