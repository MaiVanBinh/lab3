const Products = require("./../models/products");

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Products.find({});

    return res.status(200).json(products);
  } catch (err) {
    console(err);
  }
};

exports.createProd = async (req, res, next) => {
  try {
    const data = req.body;
    // get data
    const name = data.name;
    const price = data.price;
    const type = data.type;

    const newProduct = new Products({ name: name, price: price, type: type });
    const storageProd = await newProduct.save();

    return res.status(201).json(storageProd);
  } catch (err) {
    console(err);
  }
};
