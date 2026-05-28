import { products } from '../data/store.js';

const getAllProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
};

const createProduct = (req, res) => {
  const { name, description, price, stock } = req.body;
  if (!name || !description || price == null || stock == null) {
    return res.status(400).json({ error: 'Missing required product fields' });
  }

  const product = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
    name,
    description,
    price: Number(price),
    stock: Number(stock)
  };

  products.push(product);
  res.status(201).json(product);
};

const updateProduct = (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const { name, description, price, stock } = req.body;
  if (name != null) product.name = name;
  if (description != null) product.description = description;
  if (price != null) product.price = Number(price);
  if (stock != null) product.stock = Number(stock);

  res.json(product);
};

const deleteProduct = (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }
  products.splice(index, 1);
  res.status(204).send();
};

export { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
