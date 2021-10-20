export const getAllExpenses = () => {
    return fetch("http://localhost:8088/expenses?_expand=user")
    .then(res => res.json())
}