import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';

const app = express();
app.use(cors());

dotenv.config();

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log('Server is running on port 3001');
});