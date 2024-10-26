const express = require("express");
const app = express();

app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));

// Example route
app.get("/", (req, res) => {
  res.send("Welcome to the Artist Marketplace API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
