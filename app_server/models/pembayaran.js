const mongoose = require("mongoose");
/* Schema:
  - transaksi_id: ObjectId
  - metode_pembayaran: String
  - jumlah: Number
  - tanggal_pembayaran: Date
  - status: String
*/

const schemaPembayaran = new mongoose.Schema({
  transaksi_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  metode_pembayaran: {
    type: String,
    required: true,
  },
  jumlah: {
    type: Number,
    required: true,
  },
  tanggal_pembayaran: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

mongoose.model("Pembayaran", schemaPembayaran);
