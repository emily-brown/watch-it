const db = require("../models");

// Defining methods for the movieController
module.exports = {
    findAll: function (req, res) {
        db.Movie
            .find()
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        // console.log(req.body)
        db.Movie
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        db.Movie
        .findByIdAndRemove(req.params.id, (err, data) => {
            if (err) return res.status(500).send(err)
            const response = {
                message: "Deleted: " + req.params.id,
                id: data._id
            }
            return res.status(200).send(response);
        })

        
    }
};
