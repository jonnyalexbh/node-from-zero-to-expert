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

const update = (description, completed = true) => {
  loadDb();

  let index = listToDo.findIndex(task => task.description === description);

  if (index >= 0) {
    listToDo[index].completed = completed;
    saveDb();
    return true;
  } else {
    return false;
  }
}

const remove = (description) => {
  loadDb();

  let newList = listToDo.filter(task => task.description !== description);

  if (listToDo.length === newList.length) {
    return false;
  } else {
    listToDo = newList;
    saveDb();
    return true;
  }

}

module.exports = {
  create,
  getList,
  update,
  remove
}
