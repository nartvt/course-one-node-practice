const request = require('request');

const fetchLocationPromise = (address) => {
  return new Promise((resolved, reject) => {
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyC0vm5u0m1Etrg23GpVNLH52OsltfdppF0`,
      json: true
    }, (err, res, body) => {
      if (err) {
        // console.log(err)
        reject('unable connect to server !');
      } else {
        let latitude = body.results[0].geometry.location.lat;
        let longtitude = body.results[0].geometry.location.lng;
        resolved({
          latitude: latitude,
          longtitude: longtitude

        })
      }

    });
  })
  
}

module.exports = fetchLocationPromise;