const express = require("express");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const path = require("path");

const app = express();

// CORS
app.use(cors(corsOptions));

// Built in middleware functions in Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve static HTML assets
app.use(express.static(path.join(__dirname, "/public")));

// Routes
app.use("/", require("./routes/root"));

// API routes
app.use("/contact", require("./routes/api/contacts"));

app.all("*", (req, res) => {
    res.status(404);
    if (req.accepts("html")) {
        res.sendFile(path.join(__dirname, "views", "404.html"))
    } else if (req.accepts("json")) {
        res.json({ error: "404 Not Found"});
    } else {
        res.type("txt").send("404 Not Found");
    }
});

app.listen(3000, () => {
    console.log(`Server running on port 3000`)
});