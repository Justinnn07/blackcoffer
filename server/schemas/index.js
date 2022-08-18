const mongoose = require("mongoose");

const schema = mongoose.Schema({
  data: Object,
});

const Model = mongoose.model("visualisation", schema);
module.exports = Model;
