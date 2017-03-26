'use strict';

const request = require('request');
const _ = require('lodash');

function rp(url) {
  return new Promise((resolve, reject) => {
    request(url, (err, response, body) => {
      if (err) {
        reject(err);
      }
      resolve(body);
    });
  });
}

module.exports.fixit = (event, context, callback) => {

rp('https://seeclickfix.com/api/v2/issues?place_url=hampton&state=VA&per_page=20&page=1')
  .then((data) => {
    const list = JSON.parse(data).issues;
    const summaries = _.map(list, 'summary');
    const response = {
      statusCode: 200,
      body: JSON.stringify({
      issues: _.union(summaries) || 'There are no issues in this city'
      })
    };
  callback(null, response);
}).
catch((err) =>{
   callback(err, err);
  });
};