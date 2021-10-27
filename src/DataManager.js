export const getAllExpenses = () => {
    return fetch("http://localhost:8088/expenses?_expand=type")
    .then(res => res.json())
}

export const getAllTypes = () => {
    return fetch("http://localhost:8088/types")
    .then(res => res.json())
}

export const updateSalary = (user) => {
	return fetch(`http://localhost:8088/users/${user.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(user)
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

export const getUserById = (id) => {
    return fetch(`http://localhost:8088/users/${id}`)
    .then(res => res.json())
}

export const getExpenseByUser = (id) => {
    return fetch(`http://localhost:8088/expenses?userId=${id}`)
    .then(res => res.json())
}