import express from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from './infra/database/data-source';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Diagly API!');
});

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected.');

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });
