const { createFile, listTable } = require('./multiply');

const argv = require('yargs')
  .command('list', 'console print the multiplication table', {
    base: {
      demand: true,
      alias: 'b'
    },
    limit: {
      alias: 'l',
      default: 10
    }
  })
  .command('create', 'generate a file with the multiplication table', {
    base: {
      demand: true,
      alias: 'b'
    },
    limit: {
      alias: 'l',
      default: 10
    }
  })
  .argv

let command = argv._[0];

switch (command) {
  case 'list':
    listTable(argv.base, argv.limit);
    break
  case 'create':
    createFile(argv.base, argv.limit)
      .then(file => console.log(`file created ${file}`))
      .catch(error => console.log(error));
    break
  default:
    console.log('unrecognized command');
}

// console.log(argv);

// let param = argv[2];
// let base = param.split('=')[1];
