import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import productsRouter from './routes/products.js';
import ordersRouter from './routes/orders.js';
import usersRouter from './routes/users.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/users', usersRouter);

app.get('/', (req, res) => {
  res.send({ message: 'Ecommerce API is running.' });
});

app.use((req, res) => {
  res.status(404).send({ error: 'Endpoint not found' });
});

app.listen(port, () => {
  console.log(`Ecommerce API listening on http://localhost:${port}`);
});
