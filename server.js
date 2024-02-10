const express = require("express");

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Replace with your client origin
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

const products = [
  {
    id: 1,
    name: "Calabrese Broccoli",
    image: "https://i.imgur.com/cD8CPqt.png",
    category: "Vegetable",
    price: 13,
    old_price: 20,
    rating: 3,
  },
  {
    id: 2,
    name: "Fresh Bananas",
    image: "https://i.imgur.com/reqr9t8.png",
    category: "Fresh",
    price: 14,
    old_price: 20,
    rating: 4,
  },
  {
    id: 3,
    name: "Whtie Nuts",
    image: "https://i.imgur.com/yrjeAdd.png",
    category: "Millets",
    price: 15,
    old_price: 20,
    rating: 2,
  },
  {
    id: 4,
    name: "Red Tomamto",
    image: "https://i.imgur.com/aPkSlLh.png",
    category: "Vegetable",
    price: 17,
    old_price: 20,
    rating: 5,
  },
  {
    id: 5,
    name: "Mung Bean",
    image: "https://i.imgur.com/Qq4vstC.png",
    category: "Health",
    price: 11,
    old_price: 20,
    rating: 1,
  },
  {
    id: 6,
    name: "Brown Hazelnut",
    image: "https://i.imgur.com/SbI3mtV.png",
    category: "Nuts",
    price: 12,
    old_price: 20,
    rating: 4,
  },
  {
    id: 7,
    name: "Eggs",
    image: "https://i.imgur.com/eLt42uA.png",
    category: "Fresh",
    price: 17,
    old_price: 20,
    rating: 3,
  },
  {
    id: 8,
    name: "Zelco Suji Elaichi Rusk",
    image: "https://i.imgur.com/tvOnivi.png",
    category: "Fresh",
    price: 15,
    old_price: 20,
    rating: 5,
  },
];

app.get("/products", (req, res) => {
  res.send(products);
});
app.get("/product:id", (req, res) => {
  let productId = req.params.id;

  const foundProduct = products.find(
    (product) => product.id === parseInt(productId)
  );

  res.send([foundProduct]);
});
app.listen(5000);
