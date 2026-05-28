import { orders, products, users } from '../data/store.js';

const getAllOrders = (req, res) => {
  res.json(orders);
};

const getOrderById = (req, res) => {
  const order = orders.find(o => o.id === req.params.id);
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  res.json(order);
};

const createOrder = (req, res) => {
  const { userId, items } = req.body;
  if (!userId || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Order must include a userId and at least one item' });
  }

  const user = users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const orderItems = items.map(item => {
    const product = products.find(p => p.id === item.productId);
    if (!product) {
      throw new Error(`Product not found: ${item.productId}`);
    }
    if (product.stock < item.quantity) {
      throw new Error(`Insufficient stock for product: ${product.name}`);
    }
    return {
      productId: product.id,
      name: product.name,
      quantity: Number(item.quantity),
      price: product.price
    };
  });

  orderItems.forEach(item => {
    const product = products.find(p => p.id === item.productId);
    product.stock -= item.quantity;
  });

  const total = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const order = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
    userId,
    items: orderItems,
    total,
    createdAt: new Date().toISOString()
  };

  orders.push(order);
  res.status(201).json(order);
};

export { getAllOrders, getOrderById, createOrder };
