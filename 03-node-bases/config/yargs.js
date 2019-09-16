const opts = {
  base: {
    demand: true,
    alias: 'b'
  },
  limit: {
    alias: 'l',
    default: 10
  }
}

const argv = require('yargs')
  .command('list', 'console print the multiplication table', opts)
  .command('create', 'generate a file with the multiplication table', opts)
  .argv

  module.exports = {
    argv
  }
