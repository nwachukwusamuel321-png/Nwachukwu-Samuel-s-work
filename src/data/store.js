import { v4 as uuidv4 } from 'uuid';

const products = [
  {
    id: uuidv4(),
    name: 'Wireless Headphones',
    description: 'Noise-cancelling over-ear headphones with long battery life.',
    price: 129.99,
    stock: 18
  },
  {
    id: uuidv4(),
    name: 'Smartphone Stand',
    description: 'Adjustable desk stand for smartphones and tablets.',
    price: 24.99,
    stock: 84
  },
  {
    id: uuidv4(),
    name: 'Portable Charger',
    description: '10000mAh USB-C portable power bank.',
    price: 39.99,
    stock: 45
  }
];

const orders = [];
const users = [
  {
    id: uuidv4(),
    name: 'Jane Doe',
    email: 'jane.doe@example.com'
  },
  {
    id: uuidv4(),
    name: 'John Smith',
    email: 'john.smith@example.com'
  }
];

export { products, orders, users };
