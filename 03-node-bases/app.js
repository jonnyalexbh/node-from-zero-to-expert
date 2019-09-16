const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { createFile, listTable } = require('./multiply');

let command = argv._[0];

switch (command) {
  case 'list':
    listTable(argv.base, argv.limit);
    break
  case 'create':
    createFile(argv.base, argv.limit)
      .then(file => console.log(`file created:`, colors.green(file)))
      .catch(error => console.log(error));
    break
  default:
    console.log('unrecognized command');
}

// console.log(argv);

// let param = argv[2];
// let base = param.split('=')[1];
