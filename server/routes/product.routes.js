const ProductController = require("../controllers/product.controller");

module.exports = function (app) {
  app.get("/api/findAllProducts/", ProductController.findAllProducts);
  app.post("/api/product/new", ProductController.createNewProduct);
  app.get("/api/product/:id", ProductController.findOneProduct);
  app.delete("/api/product/:id/delete", ProductController.deleteExistingProduct);
};