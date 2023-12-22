import Product from "../models/product";

export const getAllProducts = async (req, res) => {
  const myData = await Product.find({});
  res.status(200).json({ myData });
};
