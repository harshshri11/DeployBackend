const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');

const { createProduct } = require('./controller/Product');
const productsRouter = require('./routes/Products');
const categoriesRouter = require('./routes/Categories');
const brandsRouter = require('./routes/Brands');
const usersRouter = require('./routes/Users');
const authRouter = require('./routes/Auth');
const cartRouter = require('./routes/Cart');
const ordersRouter = require('./routes/Orders');

//middlewares
server.use(cors({
    exposedHeaders: ['X-Total-Count']
}));
server.use(express.json()); // to parse req.body

server.use('/products', productsRouter.router);
server.use('/categories', categoriesRouter.router);
server.use('/brands', brandsRouter.router);
server.use('/users', usersRouter.router);
server.use('/auth', authRouter.router);
server.use('/cart', cartRouter.router);
server.use('/Orders', ordersRouter.router);

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://Harsh123:Harsh123@cluster0.xzwalgq.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0');
    console.log('database connected');
}

server.get('/', (req, res) => {
    res.json({ status: 'success' });
});

server.listen(8080, () => {
    console.log('server started');
});
