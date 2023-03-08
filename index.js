let employee = {
    name: "Jocelyn",
    streetAddress: "st address"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let employees = {...employee}
    employees[key] = value
    return employees;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key2, value2) {
    employee[key2] = value2
    return employee
}

function deleteFromEmployeeByKey(employee, key3,value3) {
    let newEmployee = {...employee}
    newEmployee[key3] = undefined
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key4) {
    employee[key4] = undefined
    return employee
}
