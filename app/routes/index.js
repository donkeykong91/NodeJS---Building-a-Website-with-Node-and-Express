var express = require("express");

var router = express.Router();


router.get("/", function (req, res) {
    
    {let data = req.app.get("appData");
     let pagePhotos = [];


        data.speakers.forEach(function (item) {

            pagePhotos = pagePhotos.concat(item.artwork);

        });
        
        res.render("index", {

            pageTitle: "Home",

            pageID: "home",

            artwork: pagePhotos

        });


    }

    
});


module.exports = router;