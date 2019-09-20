const fs = require('fs');

let listToDo = [];

const saveDb = () => {
  let data = JSON.stringify(listToDo);
  fs.writeFile('db/data.json', data, (err) => {
    if (err) throw new Error('the task could not be recorded');
  });
}

const create = (description) => {
  let toDo = {
    description,
    completed: false
  }
  listToDo.push(toDo);
  saveDb();

  return toDo;
}

module.exports = {
  create
}
