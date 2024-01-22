const express = require("express");
const applyMiddleware = require("./middlewares/applyMiddleware");
const connectDB = require("./db/connectDb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const authRoutes = require("./routes/authentication/index")
const cartItemsRoutes = require("./routes/cartItems/index")
const adminUser = require("./routes/adminuser/index")
const postAuser = require("./routes/users/index")
const add = require("./routes/add/index")
const order = require("./routes/order/index")
const menu = require("./routes/menu/index")
const adminStats = require("./routes/admin-stats/index")
const payment = require("./routes/payment/index")


// middlewares
applyMiddleware(app);

// Routes
app.use(authRoutes)
app.use(cartItemsRoutes);
app.use(adminUser);
app.use(postAuser);
app.use(add);
app.use(order)
app.use(menu)
app.use(adminStats);
app.use(payment)


app.get("/", (req, res) => {
  res.send("server is running...");
});

app.all("*", (req, res, next) => {
  const error = new Error(`the requested url is invalid ${req.url}`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
};

main();
