const productCategoryModel = require('../models/productCategoryModel');

const getProducts = async (filter) => {
  let query = {};
  if (filter) query = { name: { $regex: filter, $options: 'i' } };
  const products = await ShopModel.find(query);
    return {
        response: products,
        httpStatus: 200
    }
}

const createProduct = async (productData) => {
  try {
    const product = ProductsModel(productData);
    await product.save();
    return {
        response: product,
        httpStatus: 201
    };
} catch (error) {
  return {
    response: "server error",
    httpStatus: 500
  }
}
}

module.exports = {
    createProduct,
    getProducts
}
