const jokeController = require("../controllers/joke.controller");

module.exports = (app) => {
  app.get("/api/joke/", jokeController.findAllJoke);
  app.get("/api/joke/:id", jokeController.findOneSingleJoke);
  app.put("/api/joke/update/:id", jokeController.updateExistingJoke);
  app.post("/api/joke/new", jokeController.createNewJoke);
  app.delete("/api/joke/delete/:id", jokeController.deleteAnExistingJoke);
};
