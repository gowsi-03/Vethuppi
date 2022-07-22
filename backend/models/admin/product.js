const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    pro_id: String,
    title: {
      type: String,
      required: true,
      maxlength: 20,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 200,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: [Number],
      required: true,
    },
    extraOptions: {
      type: [
        {
          _id: false,
          text: { type: String, required: true },
          price: { type: [Number], required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

ProductSchema.pre("save", function (next) {
  var docs = this;
  mongoose.model("product", ProductSchema).countDocuments((error, counter) => {
    if (error) return next(error);
    counter = counter + 1;
    docs.pro_id = "pro_" + counter;
    next();
  });
});

const product = mongoose.model("product", ProductSchema, "product");
module.exports = product;
