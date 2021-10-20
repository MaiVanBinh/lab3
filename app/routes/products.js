const { getProducts, createProd } = require("./../controllers/products");

module.exports = function (app) {
  // GET METHOD
  app.get("/products", getProducts);

  //   POST METHOD
  app.post("/products", createProd);

  //       return res.status(201).json({ message: "create product success" });
  //     } catch (err) {
  //       return res.status(500).json({ message: err.message });
  //     }
  //   });

  //   // PUT METHOD
  //   app.put("/products/:id", (req, res, next) => {
  //     const oldData = jsonToObj(path.join(__dirname, "/app/storage/data.json"));

  //     const id = req.params.id;

  //     // get date update
  //     const data = req.body;
  //     const newProd = {};

  //     newProd.name = data.name;
  //     newProd.price = data.price;
  //     newProd.type = data.type;

  //     const newProdList = oldData.filter((e) => e.id != id);

  //     newProdList.push({ ...newProd, id: id });

  //     fs.writeFileSync(
  //       path.join(__dirname, "/app/storage/data.json"),
  //       JSON.stringify(newProdList)
  //     );

  //     return res.status(200).json({ message: "update product success" });
  //   });

  // app.patch("/", (req, res, next) => {

  // })
  // app.delete("/", (req, res, next) => {

  // })
};
