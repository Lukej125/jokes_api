const joke = require("../models/joke.model");

module.exports.findAllJoke = (req, res) => {
  joke
    .find()
    .then((allDaJokes) => res.json({ jokes: allDaJokes }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleJoke = (req, res) => {
  joke
    .findOne({ _id: req.params.id })
    .then((oneSingleJoke) => res.json({ joke: oneSingleJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
  joke
    .create(req.body)
    .then((newlyCreatedJoke) => res.json({ joke: newlyCreatedJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
  joke
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedJoke) => res.json({ joke: updatedJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
  joke
    .deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
