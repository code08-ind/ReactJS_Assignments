import axios from "axios";

export let empServiceObj = {
    getAllEmployees,
    getEmployeeById,
    deleteEmployee,
    updateEmployee,
    addEmployee
}

let url = "http://localhost:3500/emps/";

function getAllEmployees() {
    return axios.get(url);
}

function getEmployeeById(eno) {
    return axios.get(url + eno);
}

function deleteEmployee(eno) {
    return axios.delete(url + eno);
}

function addEmployee(emp) {
    return axios.post(url, emp);
}

function updateEmployee(emp) {
    return axios.put(url + emp.empno, emp);
}
