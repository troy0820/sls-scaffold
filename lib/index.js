const request = require('request');

class Fixit {
    constructor(url) {
        this.url = url;
    }

    request() {
        return new Promise((resolve, reject) => {
            request(this.url, (err, response, body) => {
                if (err) {
                    reject(err);
                }
                resolve(body);
            });
        });
    }
}

module.exports = Fixit;