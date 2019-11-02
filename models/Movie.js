var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    title: {
        type: String,
        required: true,
        index: {unique: true}
    },
    description: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    watched: {
        type: Boolean,
        default: false
    },

});

var Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
