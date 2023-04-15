const router = require("../router/Router");
const app = require("./server");

const port = process.env.PORT;

router(app);

app.listen(port, () => {
    console.log(`Server listening at port ${port}`)
})