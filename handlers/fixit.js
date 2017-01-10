'use strict';

const rp = require('request-promise');

module.exports.fixit = (event, context, callback) => {

rp('https://seeclickfix.com/api/v2/issues?place_url=portsmouth&state=VA&per_page=20&page=1')
  .then((data) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
      message: JSON.parse(data).issues,
      }),
    };
  callback(null, response);
  });
};
