import express from 'express';
import cors from 'cors';
import { connectDB } from './db.js';
import authRoutes from './routes/auth.routes.js';

const app = express();
app.use(express.json());

app.use(cors());

connectDB().then(() => {
  app.use('/api', authRoutes);

  app.listen(4000, () => {
    console.log('Server is running on port 4000');
  });
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});