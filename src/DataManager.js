export const getAllExpenses = () => {
    return fetch("http://localhost:8088/expenses?_expand=user")
    .then(res => res.json())
}

export const updateSalary = (userid) => {
	return fetch(`http://localhost:8088/users/${userid}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(userid)
	}).then(data => data.json());
}

export const getAllUsers = () => {
    return fetch("http://localhost:8088/users")
    .then(res => res.json())
}

export const addExpense = (newExpense) => {
	return fetch(`http://localhost:8088/expenses`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(newExpense)
	}).then(response => response.json())
}

export const deleteExpense = (id) => {
	return fetch(`http://localhost:8088/expenses/${id}`, {
		method: "DELETE"
	}).then(result => result.json())
}