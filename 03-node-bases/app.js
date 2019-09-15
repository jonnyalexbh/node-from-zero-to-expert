const { createFile } = require('./multiply');

let argv = process.argv;
let param = argv[2];
let base = param.split('=')[1];

createFile(base)
  .then(file => console.log(`file created ${file}`))
  .catch(error => console.log(error));
