const yargs = require('yargs');
const request = require('request');

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
    fetchLocation(argv.location);
  }
});

const fetchLocation = (location) => {
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyC0vm5u0m1Etrg23GpVNLH52OsltfdppF0`,
    json: true
  }, (err, res, body) => {
      if (err) {
        console.log(err)
      } else{
        console.log(body.reault.address_components);
      }
      
  });
}
yargs.parse();
// console.log(yargs.argv);