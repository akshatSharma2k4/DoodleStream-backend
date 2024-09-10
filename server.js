const { server } = require("./socket/server");
const { app } = require("./socket/server");
const path = require("path");
const dotenv = require("dotenv").config({
    path: path.resolve(__dirname, ".env"),
});
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log("Server listening at port", PORT);
});
