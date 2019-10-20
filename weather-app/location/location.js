const request = require('request');

const fetchLocation = (address,callback) => {
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyC0vm5u0m1Etrg23GpVNLH52OsltfdppF0`,
    json: true
  }, (err, res, body) => {
    if (err) {
      // console.log(err)
      callback('unable connect to server !', undefined);
    } else {
      let latitude = body.results[0].geometry.location.lat;
      let longtitude = body.results[0].geometry.location.lng;
      callback(undefined, {
        latitude: latitude,
        longtitude: longtitude
        
      })
    }

  });
}

module.exports = fetchLocation;