const { server } = require("./socket/server");
const { app } = require("./socket/server");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    // console.log("Server listening at port", PORT);
});
