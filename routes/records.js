var db = require("monk")("localhost/pvprecs"),
coll = db.get("records"),
async = require("async");

exports.overview = function(req,res) {
  var categories = ["DPS","Total Damage","HPS","Total Healing","Total Protection","Protection in 1 life","Total damage taken","Biggest Hit","Solo Kills"];
  var toReturn = {"DPS": [],"Total Damage": [],"HPS": [],"Total Healing": [],"Total Protection": [],"Protection in 1 life": [],"Total damage taken": [],"Biggest Hit": [],"Solo Kills": []};
  async.each(categories, function(category, callback) {
    console.log(category);
    coll.find({"category": category}, function(e,docs) {
      if(e) {
        callback(e);
      }
      else {
        console.log(docs);
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
  var insert = {
    "name": data.name,
    "server": data.server,
    "faction": data.faction,
    "class": data.class,
    "amount": data.amount,
    "level": data.level,
    "category": data.category,
    "warzone": data.warzone
  };
  if(typeof data.name == "undefined" || typeof data.server == "undefined" || typeof data.faction == "undefined" || typeof data.class == "undefined" || typeof data.amount == "undefined" || typeof data.level == "undefined" || typeof data.category == "undefined" || typeof data.warzone == "undefined")
  {
    res.status(403).send("Invalid field submitted")
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
