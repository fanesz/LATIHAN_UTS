const mongoose = require("mongoose");
const Pembayaran = mongoose.model("Pembayaran");

// Show all Pembayaran
const index = (req, res, next) => {
  Pembayaran.find({}, { __v: 0 })
    .then((result) => {
      const responseMessage = {
        code: 200,
        message: "Successfull",
        data: result,
      };
      res.status(200).json(responseMessage);
    })
    .catch((e) => {
      const responseMessage = {
        code: 400,
        message: "Bad request",
      };
      res.status(400).json(responseMessage);
    });
};

// Insert new Pembayaran
const insert = (req, res, next) => {
  const pembayaran = new Pembayaran({
    metode_pembayaran: req.body.metode_pembayaran,
    jumlah: req.body.jumlah,
    tanggal_pembayaran: req.body.tanggal_pembayaran,
    status: req.body.status,
  });

  pembayaran
    .save()
    .then((result) => {
      const responseMessage = {
        code: 200,
        message: "Successfull",
        data: result,
      };
      res.status(200).json(responseMessage);
    })
    .catch((e) => {
      const responseMessage = {
        code: 400,
        message: "Bad request",
      };
      res.status(400).json(responseMessage);
    });
};

module.exports = {
  index,
  insert,
};
