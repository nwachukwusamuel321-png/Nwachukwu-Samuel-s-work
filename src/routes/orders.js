import express from 'express';
import { getAllOrders, getOrderById, createOrder } from '../controllers/ordersController.js';

const router = express.Router();

router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.post('/', (req, res) => {
  try {
    return createOrder(req, res);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

export default router;
