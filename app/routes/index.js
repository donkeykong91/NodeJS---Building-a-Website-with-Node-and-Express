var express = require("express");

var router = express.Router();


router.get("/", function (req, res) {
    
    {let data = req.app.get("appData");

     let pagePhotos = [];
     
     let pageSpeakers = data.speakers;


        data.speakers.forEach(function (item) {

            pagePhotos = pagePhotos.concat(item.artwork);

        });
        
        res.render("index", {

            pageTitle: "Home",

            pageID: "home",

            speakers: pageSpeakers,

            artwork: pagePhotos

        });


    }

    
});


module.exports = router;