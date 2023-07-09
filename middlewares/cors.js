const cors = require("cors");

const corsOptions = {
  origin: [
    "http://127.0.0.1:5500",
    "http://localhost:3000",
    "https://master--effortless-gingersnap-b51f26.netlify.app",
  ],
  optionsSuccessStatus: 200,
};

module.exports = cors(corsOptions);
