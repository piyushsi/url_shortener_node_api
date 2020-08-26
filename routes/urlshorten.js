const mongoose = require("mongoose");
const UrlShorten = mongoose.model("Url");
var validUrl = require("valid-url");
const shortid = require("shortid");

module.exports = (app) => {
  //GET API for redirecting to Original URL
  app.get("/:code", async (req, res) => {
    UrlShorten.findOne({ urlHash: req.params.code }, (err, urlDb) => {
      if (err) {
        res.json({ message: "Url is not valid" });
      }
      res.redirect(urlDb.url);
    });
  });

  //POST API for creating short url from Original URL
  app.post("/api/url", async (req, res) => {
    if (validUrl.isUri(req.body.url)) {
      UrlShorten.findOne({url:req.body.url},(err,urlDb)=>{
        var urlHash = shortid.generate();
      var obj = {
        url: req.body.url,
        urlHash,
        shortUrl: `http://url-sr.herokuapp.com/${urlHash}`,
      };
      !urlDb?UrlShorten.create(obj, (err, createdDb) => {
        res.json(createdDb);
      }):res.json(urlDb);
      })
      
      
    } else {
      res.json({ message: "Url is not valid" });
    }
  });
};
