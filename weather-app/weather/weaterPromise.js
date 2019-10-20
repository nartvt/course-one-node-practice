const request = require('request');
const fetchWeatherPromise = (latitude, longtitude) => {
  return new Promise((resolve, reject) => {
    request({
      url: `https://api.darksky.net/forecast/8a2eacc63b62112153f9734f0989713f/${latitude},${longtitude}`,
      json: true
    }, (err, res, body) => {
      if (err) {
        console.log('unable to connect to server')
      } else {
        console.log('Weather: ', body.currently.summary,
          body.currently.temperature
        );
      }

    });
  })

}

module.exports = fetchWeatherPromise;