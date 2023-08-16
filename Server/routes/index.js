const routesHandler = require("express").Router()
const versionOneRoutes = require("./apiV1")

routesHandler.use("/v1",versionOneRoutes)








module.exports = routesHandler