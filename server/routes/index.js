const Router = require("express").Router();
const Model = require("../schemas/index.js");

Router.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

Router.post("/data", (req, res) => {
  const newData = new Model(req.body);
  try {
    newData.save((err) => {
      if (err) {
        return err;
      } else {
        res.status(200).send({ success: true });
      }
    });
  } catch (error) {
    res.status(200).send(error);
  }
});

Router.get("/data", (req, res) => {});
module.exports = Router;
