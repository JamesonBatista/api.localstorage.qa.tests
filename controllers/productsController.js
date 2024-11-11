const { saveData, getData } = require("../localStorage.js");

// Controlador para listar todos os produtos
const getProducts = (req, res) => {
  const products = getData("products");
  res.status(200).json(products);
};

// Controlador para buscar um produto por ID
const getProductById = (req, res) => {
  const products = getData("products");
  const product = products.find((p) => p.id === parseInt(req.params.id));

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

// Controlador para adicionar um novo produto
const createProduct = (req, res) => {
  const { name, brand, price } = req.body;

  // Validação básica dos campos obrigatórios
  if (!name || !brand || !price) {
    return res
      .status(400)
      .json({ message: "Name, brand, and price are required." });
  }

  // Verificar se o preço é um número
  if (typeof price !== "number" || price <= 0) {
    return res
      .status(400)
      .json({ message: "Price must be a positive number." });
  }

  const products = getData("products");
  const newProduct = { id: products.length + 1, name, brand, price };
  products.push(newProduct);
  saveData("products", products);
  res.status(201).json(newProduct);
};

// Controlador para atualizar um produto por ID
const updateProduct = (req, res) => {
  const { name, brand, price } = req.body;
  const products = getData("products");
  const productIndex = products.findIndex(
    (p) => p.id === parseInt(req.params.id)
  );

  if (productIndex !== -1) {
    // Atualizando apenas os campos enviados
    if (name) products[productIndex].name = name;
    if (brand) products[productIndex].brand = brand;
    if (price && typeof price === "number" && price > 0)
      products[productIndex].price = price;

    saveData("products", products);
    res.status(200).json(products[productIndex]);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

// Controlador para remover um produto por ID
const deleteProduct = (req, res) => {
  const products = getData("products");
  const newProducts = products.filter((p) => p.id !== parseInt(req.params.id));

  if (newProducts.length !== products.length) {
    saveData("products", newProducts);
    res.status(200).json({ message: "Product deleted successfully" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
