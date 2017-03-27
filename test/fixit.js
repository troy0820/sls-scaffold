const Fixit = require('../lib/index');
const assert = require('assert');
const fixit = new Fixit('https://seeclickfix.com/api/v2/issues?place_url=hampton&state=VA&per_page=20&page=1');

describe('This is going to test the fixit class', () => {
    it('fixit url should equal constructor', () => {
        assert.equal(fixit.url, 'https://seeclickfix.com/api/v2/issues?place_url=hampton&state=VA&per_page=20&page=1');
    });

    it('this should come back with some JSON', () => {
        fixit.request().then(data => {
        const list = JSON.parse(data).issues;
        assert(list);
        });
    });
});


