const description = {
  demand: true,
  alias: 'd',
  desc: 'description of the task to be done'
};

const completed = {
  default: true,
  alias: 'c',
  desc: 'mark the task completed or pending'
};

const argv = require('yargs')
  .command('create', 'create an item to do', {
    description
  })
  .command('update', 'update the completed status of a task', {
    description,
    completed
  })
  .command('remove', 'delete a task', {
    description
  })
  .argv

module.exports = {
  argv
}
