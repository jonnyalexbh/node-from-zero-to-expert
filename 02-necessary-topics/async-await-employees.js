let employees = [{
  id: 1,
  name: 'Tankis'
}, {
  id: 2,
  name: 'Jose'
}, {
  id: 3,
  name: 'Juan'
}];

let salaries = [{
  user_id: 1,
  salary: 1000
}, {
  user_id: 2,
  salary: 2000
}];

let getEmployee = async (id) => {

  let employeeDB = employees.find(employee => employee.id === id)

  if (!employeeDB) {
    throw new Error(`there is no employee with the id ${id}`)
  } else {
    return employeeDB;
  }
}

let getSalary = async employee => {
  let salaryDB = salaries.find(salary => salary.user_id === employee.id)

  if (!salaryDB) {
    throw new Error(`no salary was found for the employee ${employee.id}`)
  } else {
    return {
      id: employee.id,
      name: employee.name,
      salary: salaryDB.salary
    };
  }
}

let getInformation = async id => {
  let employee = await getEmployee(id);
  let resp = await getSalary(employee);
  return `${resp.name} has a salary of ${resp.salary}$`;
}

getInformation(1)
  .then(message => console.log(message))
  .catch(error => console.log(error));
