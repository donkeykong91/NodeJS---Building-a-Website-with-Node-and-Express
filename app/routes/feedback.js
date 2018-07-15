var express = require("express");

var router = express.Router();


router.get("/feedback", function (req, res) {
    
    {let data = req.app.get("appData");
        
        res.render("feedback", {

            pageTitle: "Feedback",

            pageID: "feedback",

        });

    }

});


module.exports = router;