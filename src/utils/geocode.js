const request = require('postman-request');

const geocode = (address, callback) => {
  const token =
    'pk.eyJ1IjoibWF3bGF3aSIsImEiOiJja2VkYTByZHUwZmxyMndzNHJxZHo5Z3B4In0.SVRNtKR2Ogz6_ydwOChk2Q';
  const geocodURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${token}&limit=1`;

  request({ url: geocodURL, json: true }, (err, { body }) => {
    if (err) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.features.length === 0) {
      callback('Unable to find location', undefined);
    } else {
      callback(undefined, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
