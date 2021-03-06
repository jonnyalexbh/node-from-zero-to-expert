const colors = require('colors');
const argv = require('./config/yargs').argv;
const toDo = require('./tasks-to-do');

let command = argv._[0];

switch (command) {
  case 'list':
    let list = toDo.getList();
    for (let task of list) {
      console.log('========Por Hacer========='.green);
      console.log(task.description);
      console.log('Estado: ', task.completed);
      console.log('=========================='.green);
    }
    break
  case 'create':
    let task = toDo.create(argv.description);
    console.log(task);
    break
  case 'update':
    let updated = toDo.update(argv.description, argv.completed);
    console.log(updated);
    break
  case 'remove':
    let erased = toDo.remove(argv.description);
    console.log(erased);
    break;
  default:
    console.log('unrecognized command');
}
