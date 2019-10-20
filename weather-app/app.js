const yargs = require('yargs');
const fetchLocation = require('./location/location');
const fetchWeather = require('./weather/weather')

yargs.command({
  command: 'fetch-location',
  builder: {
    location: {
      type: 'string',
      demandOption: true
    }
  },
  handler: (argv) => {
    console.log(argv);
    fetchLocation(argv.location, (err,locationResult) => {
      if (err == undefined) {
        fetchWeather(locationResult.latitude, locationResult.longtitude);
      } else {
        console.log(err);
      }
    });
  }
});

yargs.parse();
// console.log(yargs.argv);