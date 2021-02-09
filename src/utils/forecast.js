const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=1dc37ca700eefc1cc51ad49b42ea6f4a&query=${latitude},${longitude}.4233&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ' It is currently ' +
          body.current.temperature +
          ' degress out. There is a ' +
          body.current.precipProbability +
          '% chance of rain.'
      );
    }
  });
};

module.exports = forecast;
// http://api.weatherstack.com/current?access_key=1dc37ca700eefc1cc51ad49b42ea6f4a&query=42.3605,-71.0596.4233&units=f`;
// const request = require('postman-request');

// const forecast = (longitude, latitude, callback) => {
//   const URL = `http://api.weatherstack.com/current?access_key=1dc37ca700eefc1cc51ad49b42ea6f4a&query=${latitude},${longitude}.4233&units=f`;
//   request({ url: URL, json: true }, (err, res) => {
//     if (err) {
//       callback('Unable to connect to weather service!', undefined);
//     } else if (res.body.error) {
//       callback('Unable to find location', undefined);
//     } else {
//       callback(
//         undefined,
//         `${res.body.current.weather_descriptions[0]} It is currently ${res.body.current.temperature} degress out. It feels like ${res.body.current.feelslike} degress out. with ${res.body.current.humidity}% humidity`
//       );
//     }
//   });
// };

// module.exports = forecast;
