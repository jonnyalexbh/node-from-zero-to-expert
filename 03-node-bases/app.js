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
  .argv

const { createFile } = require('./multiply');

// console.log(argv.base);

// let param = argv[2];
// let base = param.split('=')[1];

// createFile(base)
//   .then(file => console.log(`file created ${file}`))
//   .catch(error => console.log(error));
