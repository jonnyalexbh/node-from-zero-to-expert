const fs = require('fs');

let listToDo = [];

const saveDb = () => {
  let data = JSON.stringify(listToDo);
  fs.writeFile('db/data.json', data, (err) => {
    if (err) throw new Error('the task could not be recorded');
  });
}

const loadDb = () => {
  try {
    listToDo = require('../db/data.json');
  } catch (error) {
    listToDo = [];
  }
}

const create = (description) => {
  loadDb();

  let toDo = {
    description,
    completed: false
  }
  listToDo.push(toDo);
  saveDb();

  return toDo;
}

const getList = () => {
  loadDb();
  return listToDo;
}

module.exports = {
  create,
  getList
}
