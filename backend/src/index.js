const express = require('express');
const bodyParser = require('body-parser')
const categoryRoutes = require('./routes/category.route')
const userRoutes = require('./user.route')

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use('/category', categoryRoutes);
app.use('/user', userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// http://localhost:3000/category/create
// http://localhost:3000/category/update