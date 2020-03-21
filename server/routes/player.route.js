const PlayersController = require("../controllers/player.controller");

module.exports = app => {
    app.get("/api/players", PlayersController.findAllPlayers);
    app.get("/api/players/:id", PlayersController.findOnePlayer);
    app.put("/api/players/update/:id", PlayersController.updatePlayers);
    app.post("/api/players/new", PlayersController.Create);
    app.delete("/api/players/delete/:id", PlayersController.deletePlayer);
};