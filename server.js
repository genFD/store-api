import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import notFound from './middleware/notFound.js';
import error from './middleware/error.handler.js';
import connectDB from './db/config.js';

colors.setTheme({
  server: ['bgCyan', 'black', 'bold', 'underline'],
});

dotenv.config();
const app = express();
app.use(express.json());

function controller(req, res) {
  res.send('test');
}
app.get('/', controller);
app.use(notFound);
app.use(error);
const PORT = process.env.PORT || 6000;
const URI = process.env.MONGO_URI;

const startServer = () => {
  app.listen(PORT, () =>
    console.log(`Server Running On Port ${PORT}...`.server)
  );
};
const start = async () => {
  await connectDB(URI);
  startServer();
};

start();
