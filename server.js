var db = require("monk")("localhost/pvprecs"),
coll = db.get("records"),
express = require("express"),
bodyParser = require('body-parser'),
app = express();

// Form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
var recs = require("./routes/records.js");

app.use(express.static('public'));

app.get("/api/records/", recs.overview);
app.get("/api/records/:server", recs.server);

app.put("/api/records", recs.new);

app.post("/api/records", recs.update);

app.listen(3000);
