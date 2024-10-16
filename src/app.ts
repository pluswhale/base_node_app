import express from 'express';
import appRoutes from './routes/appRoutes';
import cors from 'cors';

const app = express();
const port = 5002;

app.use(express.json());

const corsOptions = {
  origin: '*', // Allow all origins
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow all standard methods
  allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization,X-Secret-Phrase', // Allow specific headers
  credentials: true, // Allow cookies to be sent with requests
};

app.use(cors(corsOptions));

app.use([appRoutes]); // app routes here

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
