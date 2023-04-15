const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.sendFile(`${process.cwd()}/src/public/home.html`)
});

module.exports = router;