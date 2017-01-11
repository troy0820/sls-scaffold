'use strict';

const rp = require('request-promise');
//TODO: Don't forget to deploy this function for the latest
module.exports.fixit = (event, context, callback) => {

rp('https://seeclickfix.com/api/v2/issues?place_url=portsmouth&state=VA&per_page=20&page=1')
  .then((data) => {
    const response = {
      statusCode: 200,
      body: {
      issues: JSON.parse(data).issues,
      },
    };
  callback(null, response);
  });
};
