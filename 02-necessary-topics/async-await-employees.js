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

let getEmployee = (id) => {
  return new Promise((resolve, reject) => {

    let employeeDB = employees.find(employee => employee.id === id)

    if (!employeeDB) {
      reject(`there is no employee with the id ${id}`);
    } else {
      resolve(employeeDB);
    }

  });
}

let getSalary = employee => {
  return new Promise((resolve, reject) => {
    let salaryDB = salaries.find(salary => salary.user_id === employee.id)

    if (!salaryDB) {
      reject(`no salary was found for the employee ${employee.id}`);
    } else {
      resolve({
        id: employee.id,
        name: employee.name,
        salary: salaryDB.salary
      });
    }
  });
}
