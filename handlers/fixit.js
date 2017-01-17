'use strict';

const rp = require('request-promise');
const _ = require('lodash');

module.exports.fixit = (event, context, callback) => {

rp('https://seeclickfix.com/api/v2/issues?place_url=hampton&state=VA&per_page=20&page=1')
  .then((data) => {
    const list = JSON.parse(data).issues;
    const summaries = _.map(list, 'summary');
    const response = {
      statusCode: 200,
      body: JSON.stringify({
      issues: _.union(summaries) || 'There are no issues in this city',
      }),
    };
  callback(null, response);
}).
catch((err) =>{
   callback(err, err);
  });
};
