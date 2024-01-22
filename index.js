// const express = require("express");
// const app = express();
// const Port = 5000;
// const cors = require("cors");
// const dotenv = require("dotenv");
// require("dotenv").config();
// const jwt = require("jsonwebtoken");
// const stripe = require("stripe")(process.env.STRIPE_TOKEN);

// app.use(cors({
//   origin: ['http://localhost:5173']
// }));
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello Food");
// });

// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.zelnjpd.mongodb.net/?retryWrites=true&w=majority`;

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     await client.connect();

//     const menuCollection = client.db("foodi").collection("menu");
//     const cartCollection = client.db("foodi").collection("cartItems");
//     const addCollection = client.db("foodi").collection("add");
//     const usersCollection = client.db("foodi").collection("users");
//     const orderCollection = client.db("foodi").collection("order");

//     // jwt authentication

//     app.post("/jwt", async (req, res) => {
//       const user = req.body;
//       const token = jwt.sign(user, process.env.JWT_TOKEN, {
//         expiresIn: "1hr",
//       });
//       res.send({ token });
//     });

//     const verifyToken = (req, res, next) => {
//       if (!req.headers.authorization) {
//         return res.status(401).send({ message: "unauthorized access" });
//       }
//       const token = req.headers.authorization.split(" ")[1];
//       jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
//         if (err) {
//           return res.status(401).send({ message: "token is invalid!" });
//         }
//         req.decoded = decoded;
//         next();
//       });
//     };

    // const verifyAdmin = async (req, res, next) => {
    //   const email = req?.decoded?.email;
    //   const query = { email: email };

    //   const user = await usersCollection.findOne(query);
    //   const isAdmin = user?.role === "Admin";

    //   if (!isAdmin) {
    //     return res.status(403).send({ message: "forbidden access!" });
    //   }
    //   next();
    // };

//     app.get("/menu", async (req, res) => {
//       const result = await menuCollection.find().toArray();
//       res.send(result);
//     });

//     app.get("/menu/:id", async (req, res) => {
//       const id = req.params.id;
//       const filter = { _id: new ObjectId(id) };
//       const result = await menuCollection.findOne(filter);
//       res.send(result);
//     });

    // app.post("/cartItems", verifyToken, verifyAdmin, async (req, res) => {
    //   const body = req.body;
    //   const result = await cartCollection.insertOne(body);
    //   res.send(result);
    // });

    // app.get("/cartItems", async (req, res) => {
    //   const result = await cartCollection.find().toArray();
    //   res.send(result);
    // });

    // app.get("/cartItems/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const result = await cartCollection.findOne(query);
    //   res.send(result);
    // });

    // app.delete("/cartItems/:id", verifyToken, verifyAdmin, async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const result = await cartCollection.deleteOne(query);
    //   res.send(result);
    // });

    // app.patch("/cartItems/:id", verifyToken, verifyAdmin, async (req, res) => {
    //   const id = req.params.id;
    //   const { name, recipe, category, image, price } = req.body;
    //   const filter = { _id: new ObjectId(id) };
    //   const option = { upsert: true };
    //   const updatedDoc = {
    //     $set: {
    //       name: name,
    //       recipe: recipe,
    //       category: category,
    //       image: image,
    //       price: price,
    //     },
    //   };
    //   const result = await cartCollection.updateOne(filter, updatedDoc, option);
    //   res.send(result);
    // });

    // app.post("/add", async (req, res) => {
    //   const cartItem = req.body;
    //   const result = await addCollection.insertOne(cartItem);
    //   res.send(result);
    // });
    // app.get("/add", async (req, res) => {
    //   const email = req.query.email;
    //   const filter = { email: email };
    //   const result = await addCollection.find(filter).toArray();
    //   res.send(result);
    // });

    // app.get("/add/:id", verifyToken, async (req, res) => {
    //   const id = req.params.id;
    //   const filter = { _id: new ObjectId(id) };
    //   const result = await addCollection.findOne(filter);
    //   res.send(result);
    // });

    // app.delete("/add/:id", verifyToken, async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const result = await addCollection.deleteOne(query);
    //   res.send(result);
    // });

    // app.put("/add/:id", verifyToken, async (req, res) => {
    //   const id = req.params.id;
    //   const { quantity } = req.body;
    //   const query = { _id: new ObjectId(id) };
    //   const options = { upsert: true };
    //   const updatedDoc = {
    //     $set: {
    //       quantity: parseInt(quantity, 10),
    //     },
    //   };
    //   const result = await addCollection.updateOne(query, updatedDoc, options);
    //   res.send(result);
    // });

    // app.get("/users/admin/:email", verifyToken, async (req, res) => {
    //   const email = req?.params?.email;

    //   if (email !== req?.decoded?.email) {
    //     return res.status(403).send({ message: "forbidden access" });
    //   }
    //   const query = { email: email };
    //   const user = await usersCollection.findOne(query);

    //   let admin = false;
    //   if (user) {
    //     admin = user?.role === "Admin";
    //   }
    //   res.send({ admin });
    // });

    // app.post("/users", async (req, res) => {
    //   const body = req.body;
    //   const query = { email: body.email };
    //   const isExist = await usersCollection.findOne(query);
    //   if (isExist) {
    //     return res.status(302).json({ message: "user already exists" });
    //   } else {
    //     const result = await usersCollection.insertOne(body);
    //     res.send(result);
    //   }
    // });

    // app.get("/users", verifyToken, async (req, res) => {
    //   const result = await usersCollection.find().toArray();
    //   res.send(result);
    // });

    // app.get("/users/:id", verifyToken, verifyAdmin, async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const result = await usersCollection.findOne(query);
    //   res.send(result);
    // });

    // app.patch("/users/:id", verifyToken, verifyAdmin, async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const updatedDoc = {
    //     $set: {
    //       role: "Admin",
    //     },
    //   };
    //   const result = await usersCollection.updateOne(query, updatedDoc);
    //   res.send(result);
    // });

    // app.delete("/users/:id", verifyToken, verifyAdmin, async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const result = await usersCollection.deleteOne(query);
    //   res.send(result);
    // });

//     // Stripe Payments

    // app.post("/create-payment-intent", verifyToken, async (req, res) => {
    //   const { price } = req.body;
    //   const amount = price * 100;
    //   const paymentIntent = await stripe.paymentIntents.create({
    //     amount: amount,
    //     currency: "usd",
    //     payment_method_types: ["card"],
    //   });

    //   res.send({
    //     clientSecret: paymentIntent.client_secret,
    //   });
    // });

    // app.post("/order", verifyToken, async (req, res) => {
    //   const order = req.body;
    //   const result = await orderCollection.insertOne(order);
    //   const cardIds = order?.cartItems?.map((id) => new ObjectId(id));
    //   const deletedCardRequest = await addCollection.deleteMany({
    //     _id: { $in: cardIds },
    //   });
    //   res.send({ result, deletedCardRequest });
    // });

    // app.get("/orderAmin", verifyToken, async (req, res) => {
    //   const email = req.query.email;
    //   const query = { email: email };
    //   const decodedEmail = req.decoded.email;
    //   if (email !== decodedEmail) {
    //     return res.status(403);
    //   }
    //   const result = await orderCollection.find(query).toArray();
    //   res.send(result);
    // });

    // app.get("/orderAdmin/:id", verifyToken, verifyAdmin, async (req, res) => {
    //   const id = req.params.id;
    //   const filter = { _id: new ObjectId(id) };
    //   const result = await orderCollection.findOne(filter);
    //   res.send(result);
    // });

    // app.get("/orderAdmin", verifyToken, verifyAdmin, async (req, res) => {
    //   const result = await orderCollection.find().toArray();
    //   res.send(result);
    // });

    // app.patch("/orderAdmin/:id", verifyToken, verifyAdmin, async (req, res) => {
    //   const id = req.params.id;
    //   const filter = { _id: new ObjectId(id) };
    //   const option = { upsert: true };
    //   const updatedDoc = {
    //     $set: {
    //       status: "Order confirmed",
    //     },
    //   };
    //   const result = await orderCollection.updateOne(
    //     filter,
    //     updatedDoc,
    //     option
    //   );
    //   res.send(result);
    // });

//     app.delete(
//       "/orderAdmin/:id",
//       verifyToken,
//       verifyAdmin,
//       async (req, res) => {
//         const id = req.params.id;
//         const filter = { _id: new ObjectId(id) };
//         const result = await orderCollection.deleteOne(filter);
//         res.send(result);
//       }
//     );

    app.get("/admin-stats", verifyToken, verifyAdmin, async (req, res) => {
      const users = await usersCollection.estimatedDocumentCount();
      const menuItems = await cartCollection.estimatedDocumentCount();
      const orders = await orderCollection.estimatedDocumentCount();
      const result = await orderCollection
        .aggregate([
          {
            $group: {
              _id: null,
              totalRevenue: {
                $sum: "$price",
              },
            },
          },
        ])
        .toArray();

      const revenue = result.length > 0 ? result[0].totalRevenue : 0;

      res.send({ users, menuItems, orders, revenue });
    });

//     app.get("/order-stats-admin", async(req, res) =>{
//       const result = await orderCollection.aggregate([
//         {
//           $unwind: '$menuItems'
//         },
//         {
//           $lookup:{
//             from: "add",
//             localField: "menuItems",
//             foreignField: '_id',
//             as: 'menuItem'
//           }
//         }
//       ]).toArray()
//       res.send(result)
//     })

//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // await client.close();
//   }
// }
// run().catch(console.dir);

// app.listen(Port, () => {
//   console.log(`Food Server Is Running On Port ${Port}`);
// });
