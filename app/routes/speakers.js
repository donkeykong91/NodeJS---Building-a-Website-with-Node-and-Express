var express = require("express");

var router = express.Router();


router.get("/speakers", function (req, res) {

    {let data = req.app.get("appData");

     let pagePhotos = [];

     let pageSpeakers = data.speakers;


        data.speakers.forEach(function (item) {

            pagePhotos = pagePhotos.concat(item.artwork);

        });
        
        res.render("speakers", {

            pageTitle: "Speakers",

            pageID: "speakerList",

            speakers: pageSpeakers,

            artwork: pagePhotos

        });


    }

});


router.get("/speakers/:speakerid", function (req, res) {

    {let data = req.app.get("appData");

     let pagePhotos = [];

     let pageSpeakers = [];


        data.speakers.forEach(function (speaker) {

            if (speaker.shortname == req.params.speakerid) {

                pageSpeakers.push(speaker);

                pagePhotos = pagePhotos.concat(speaker.artwork);

            }

        });
        
        res.render("speakers", {

            pageTitle: "Speaker Info",

            pageID: "speakerDetail",

            speakers: pageSpeakers,

            artwork: pagePhotos

        });


    }

});


module.exports = router;
