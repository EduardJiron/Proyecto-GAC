const facultadModel = require("../model/facultad.model");

exports.getAllFacultad = async (req, res) => {
  try {
    const facultad = await facultadModel.findAll();

    res.status(200).send({
      status: 200,
      body: facultad,
    });
  } catch (err) {
    console.log(err);
  }
};
