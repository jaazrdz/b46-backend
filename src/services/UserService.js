const { User } = require('../Models/index.js');

module.exports = {
    create: (body) => new User(body).save(),

};

