import Product from "./models/product.js";
import mongoose from "mongoose";
import axios from "axios";

const API_URL = "https://s3.amazonaws.com/roxiler.com/product_transaction.json";

async function fetchAndSaveProducts() {
  try {
    const response = await axios.get(API_URL);
    const productsData = response.data;

    const products = productsData.map(
      (productData) => new Product(productData)
    );
    await Promise.all(products.map((product) => product.save()));
    console.log("Products saved successfully");
  } catch (err) {
    console.error("Error fetching or saving products:", err);
  }
}

export default fetchAndSaveProducts;
