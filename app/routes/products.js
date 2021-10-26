const { getProducts, createProd } = require("./../controllers/products");

module.exports = function (app) {
  // GET METHOD
  app.get("/products", getProducts);

  //   POST METHOD
  app.post("/products", createProd);
};
