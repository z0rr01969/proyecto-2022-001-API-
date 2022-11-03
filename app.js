const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

require('./connection/mongoconn');

const PORT = 3001;

const shopsRoutes = require('./routes/shops');
app.use('/shops', shopsRoutes);

const productsRoutes = require('./routes/products');
app.use('/products', productsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});