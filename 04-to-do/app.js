const argv = require('./config/yargs').argv;
const toDo = require('./tasks-to-do');

let command = argv._[0];

switch (command) {
  case 'list':
    console.log('show all tasks to do');
    break
  case 'create':
    let task = toDo.create(argv.description);
    console.log(task);
    break
  case 'update':
    console.log('update by doing');
    break
  default:
    console.log('unrecognized command');
}
