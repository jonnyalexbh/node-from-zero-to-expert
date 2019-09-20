const argv = require('yargs')
  .command('create', 'create an item to do', {
    description: {
      demand: true,
      alias: 'd',
      desc: 'description of the task to be done'
    }
  })
  .command('update', 'update the completed status of a task', {
    description: {
      demand: true,
      alias: 'd',
      desc: 'description of the task to be done'
    },
    completed: {
      default: true,
      alias: 'c',
      desc: 'mark the task completed or pending'
    }
  })
  .command('remove', 'delete a task', {
    description: {
      demand: true,
      alias: 'd',
      desc: 'description of the task to be done'
    },
  })
  .argv

module.exports = {
  argv
}
