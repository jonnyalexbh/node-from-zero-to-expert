const { createFile } = require('./multiply');
let base = 4;

createFile(base)
  .then(file => console.log(`file created ${file}`))
  .catch(error => console.log(error));
