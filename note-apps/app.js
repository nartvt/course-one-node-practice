const yargs = require('yargs');
const appController = require('./note');
  yargs.command({
    command: 'add',
    builder: {
      title: {
        type: 'string',
        demandOption: true
      },
      body: {
        type: 'string',
        demandOption: true
      }
    },
    handler: (argv) => {
      console.log('Add new Note');
      console.log('argv', argv);
      const note = {
        id: Math.random().toString(),
        title: argv.title,
        body: argv.body
      };

      appController.addNote(note);
    }
  })
yargs.command({
  command: 'remove',
  builder: {
    id: {
      type: 'string',
      demandOption: true
    }
  },
  handler: (argv) => {
    console.log('Remove Note');
    appController.emoveNote(argv.id);
  }
})
yargs.command({
  command: 'edit',
  builder: {
    id: {
      type: 'string',
      demandOption: true
    },
    title: {
      type: 'string',
      demandOption: true
    },
    body: {
      type: 'string',
      demandOption: true
    }
  },
  handler: (argv) => {
    console.log('Edit Note');
    const note = {
      id: argv.id,
      title: argv.title,
      body: argv.body
    }
    appController.editNote(note);
  }
})
yargs.command({
  command: 'list',
  handler: (argv) => {
    console.log('list Note');
    appController.listNode();
  }
})

console.log(yargs.argv);
// console.log('...............................');
// console.log(process.argv[2]);
// console.log(process.argv[3]);
// console.log(process.argv[4]);