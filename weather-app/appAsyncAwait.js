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
  handler: async (argv) => {
    try {
      console.log(argv);
      const locationRes = await fetchLocationPromise(argv.location);
      const weatherRes = await fetchWeatherPromise(locationRes.latitude, locationRes.longtitude);
      console.log('Weather: ', weatherRes.summary, weatherRes.temperature);
    } catch (err) {
      console.log(err);
    }
    
  }
});

yargs.parse();
// console.log(yargs.argv);