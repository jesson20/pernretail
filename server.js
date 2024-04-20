const express = require('express')
const project2Routes = require('./src/routes')
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("HEllo manggi");
})

app.use('/api/v1/project1', project2Routes);
app.listen(port, () => console.log(`app listening on port ${port}`));
