const argv = require('yargs').argv

console.log(argv);

let command = argv._[0];

switch (command) {
  case 'list':
    console.log('show all tasks to do');
    break
  case 'create':
    console.log('create by doing');
    break
  case 'update':
    console.log('update by doing');
    break
  default:
    console.log('unrecognized command');
}
