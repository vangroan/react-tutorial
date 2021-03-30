import express from 'express';
import cors from 'cors';
import swaggerui from 'swagger-ui-express';
import fs from 'fs';
// import swaggerdoc from './swagger.json';

const swaggerdoc = JSON.parse(fs.readFileSync('./swagger.json'));

const app = express();
app.use(express.json());
app.use('/swagger', swaggerui.serve, swaggerui.setup(swaggerdoc));

// Enable CORS for all routes
app.use(cors());

const port = 8000;
const state = {
  balance: 10000,
};


app.get('/', (req, res) => {
  console.log(state);
  res.json(state);
});

// { "deposit": 100 }
app.post('/deposit', (req, res) => {
  state.balance += req.body.amount || 0;
  console.log("Deposit", req.body.amount, "Balance", state.balance);
  res.json(state);
});

// { "withdraw": 100 }
app.post('/withdraw', (req, res) => {
  state.balance -= req.body.amount || 0;
  console.log("Withdraw", req.body.amount, "Balance", state.balance);
  res.json(state);
});

app.listen(port, () => {
  console.log("Server running on port", port);
});
