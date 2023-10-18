const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect("mongodb://localhost/chatapp");
}

module.exports = connect;