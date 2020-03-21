const Player = require("../models/player.model");

// CRUD

module.exports.Create = (req, res) => {
    console.log("creating a newwwwww playa", req.body);
    Player.create(req.body)
        .then(newPlayer => res.json(newPlayer))
        .catch(err => res.json(err));
};

module.exports.findAllPlayers = (req,res) => {
    Player.find()
        .then((allPlayers) => res.json({players: allPlayers}))
        .catch(err => res.json ({message: "Something went wrong!", error: err }));
};

module.exports.findOnePlayer = (req,res) => {
    Player.findOne({_id: req.params.id })
        .then(oneSinglePlayer => res.json({player: oneSinglePlayer}))
        .catch(err =>res.json ({message: "Something is wrong!", error:err}));
};

module.exports.updatePlayers = (req, res) => {
    Player.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatePlayers => res.json ({ player: updatePlayers}))
    .catch(err => res.json({ message: "Something is wrong", error:err}));
};

module.exports.deletePlayer = (req, res) => {
    console.log("This mufucka sucked so we cut them.", req.params.id)
    Player.deleteOne({ _id: req.params.id })
        .then(result => res.json ({ result: result }))
        .catch(err => res.json ({ message: "Ruh-roh Raggy...", error:err }));
};