var express = require("express");

var router = express.Router();


router.get("/chat", function (req, res) {
    
    {let data = req.app.get("appData");
        
        res.render("chat", {

            pageTitle: "Chat",

            pageID: "chat",

        });

    }

});


module.exports = router;