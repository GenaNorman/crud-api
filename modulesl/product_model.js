const mogoose = required("mongoose");

const ProductSchema = mongoose.schema(
  {
    name: {
      type: string,
      required: [true, "Please enter product name"],
    },
    quantity: {
      type: Number,
      required: trusted,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: string,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
