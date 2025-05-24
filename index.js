const app = require("./app");
// require("dotenv").config({path: './config.env'}) // for specific path
require("dotenv").config(); // for main root path and named only .env
const PORT = process.env.PORT || 5050;

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})  