'use strict';

const Fixit = require('../lib/index');
const _ = require('lodash');

const fixit = new Fixit('https://seeclickfix.com/api/v2/issues?place_url=hampton&state=VA&per_page=20&page=1');



module.exports.fixit = (event, context, callback) => {

fixit
  .request()
  .then(data => {
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
catch(err => {
   callback(err, err);
  });
};
