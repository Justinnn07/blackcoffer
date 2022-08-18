const Router = require("express").Router();
const Model = require("../schemas/index.js");

Router.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

// Router.post("/data", (req, res) => {
//   const newData = new Model({
//     data: req.body.data,
//   });
//   try {
//     newData.save((err) => {
//       if (err) {
//         return err;
//       } else {
//         res.status(200).send({ success: true });
//       }
//     });
//   } catch (error) {
//     res.status(200).send(error);
//   }
// });

Router.get("/data", async (req, res) => {
  await Model.find({})
    .then((data) => {
      res.status(200).send(data[0]);
    })
    .catch((err) => res.status(404).send(err));
});
module.exports = Router;
