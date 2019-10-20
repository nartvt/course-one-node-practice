const yargs = require('yargs');
const fetchLocationPromise = require('./location/locationPromise');
const fetchWeatherPromise = require('./weather/weaterPromise')

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
    fetchLocationPromise(argv.location)
      .then(locationRes => {
        return fetchWeatherPromise(locationRes.latitude, locationRes.longtitude);
        // promise chaining
      })
      .then((weatherRes) => {
        console.log('Weather: ', weatherRes.summary,
          weatherRes.temperature);
      })
      .catch(locationErr => {
        console.log(locationErr);
    })
  }
});

yargs.parse();
// console.log(yargs.argv);