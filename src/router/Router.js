const viewsController = require("../controllers/controller.views");

const router = (app) => {
    app.use("/", viewsController);
}

module.exports = router;