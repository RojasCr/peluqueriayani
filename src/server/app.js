const router = require("../router/Router");
const app = require("./server");

const port = 8080;

router(app);

app.listen(port, () => {
    console.log(`Server listening at port ${port}`)
})