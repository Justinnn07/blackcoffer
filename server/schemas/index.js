const mongoose = require("mongoose");

const schema = mongoose.Schema({
  data: Array,
});

schema.options.toJSON = {
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
};

const Model = mongoose.model("visualisation", schema);
module.exports = Model;
