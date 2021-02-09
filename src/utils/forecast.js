const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=1dc37ca700eefc1cc51ad49b42ea6f4a&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]} It is currently ${body.current.temperature} F degress out. It feels like ${body.current.feelslike} F degress out. with ${body.current.humidity}% humidity`
      );
    }
  });
};

module.exports = forecast;
