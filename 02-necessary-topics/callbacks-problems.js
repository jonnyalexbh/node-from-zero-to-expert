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

let getEmployee = (id, callback) => {
  let employeeDB = employees.find(employee => employee.id === id)
  if (!employeeDB) {
    callback(`there is no employee with the id ${id}`);
  } else {
    callback(null, employeeDB);
  }
}

let getSalary = (employee, callback) => {
  let salaryDB = salaries.find(salary => salary.user_id === employee.id)
  if (!salaryDB) {
    callback(`no salary was found for the employee ${employee.id}`);
  } else {
    callback(null, {
      id: employee.id,
      name: employee.name,
      salary: salaryDB.salary
    });
  }
}

getEmployee(3, (err, employee) => {
  if (err) {
    return console.log(err);
  }
  getSalary(employee, (err, resp) => {
    if (err) {
      return console.log(err);
    };
    console.log(`The salary of ${resp.name} is $${resp.salary}`);
  })
});
