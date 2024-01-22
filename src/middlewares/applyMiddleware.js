const express = require("express");
const cors = require("cors");
const { LOCAL_CLIENT } = require("../config/default");

const applyMiddleware = (app) => {
    app.use(cors({
        origin: [
            LOCAL_CLIENT
        ],
        credentials: true
    }));
    app.use(express.json());
};

module.exports = applyMiddleware