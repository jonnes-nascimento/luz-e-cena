const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Your data file
const middlewares = jsonServer.defaults();
const cors = require('cors');

server.use(middlewares);

// Enable CORS with custom options
server.use(cors({
  origin: '*', // Allow requests only from this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow sending cookies/authorization headers
  optionsSuccessStatus: 204 // For preflight requests
}));

server.use(router);

server.listen(3001, () => {
  console.log('JSON Server is running on port 3001');
});