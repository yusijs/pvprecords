var db = require("monk")("localhost/pvprecs"),
coll = db.get("records"),
async = require("async");


exports.overview = function(req,res) {
  var categories = ["DPS","Total Damage","HPS","Total Healing","Total Protection","Protection in 1 life","Total damage taken","Biggest Hit","Solo Kills"];
  var toReturn = {"DPS": [],"Total Damage": [],"HPS": [],"Total Healing": [],"Total Protection": [],"Protection in 1 life": [],"Total damage taken": [],"Biggest Hit": [],"Solo Kills": []};
  async.each(categories, function(category, callback) {
    coll.find({"category": category}, {sort: {"amount": -1}, limit:20}, function(e,docs) {
      if(e) {
        callback(e);
      }
      else {
        toReturn[category] = docs;
        callback();
      }
    })
  }, function(err) {
    res.send(toReturn);
  })
}

exports.server = function(req,res) {

}

exports.new = function(req,res) {
  var data = req.body;
  data.warzone = (data.warzone == "true") ? true : false;
  data.level = (data.level == "true") ? true : false;
  var now = new Date();
  var insert = {
    "name": data.name,
    "server": data.server,
    "faction": data.faction,
    "class": data.class,
    "amount": data.amount,
    "level": data.level,
    "category": data.category,
    "screenshot": data.screenshot,
    "warzone": data.warzone,
    "patch": data.patch,
    "addedDate": now
  };
  if(typeof data.name == "undefined" || typeof data.server == "undefined" || typeof data.faction == "undefined" || typeof data.class == "undefined" || typeof data.amount == "undefined" || typeof data.level == "undefined" || typeof data.category == "undefined" || typeof data.warzone == "undefined")
  {
    res.status(403).send("Invalid field submitted");
  }
  else {
    console.log(data);
    var promise = coll.insert(insert);
    promise.on("complete", function(err,doc) {
      if(err) {
        res.status(500).send(err);
      }
      else {
        res.json(doc);
      }
    });
  }
}

exports.update = function(req,res) {

}
