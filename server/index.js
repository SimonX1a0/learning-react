import express from 'express'

const app = express();
const PORT = 5000;

app.get("/", (req, res)=>{
    res.sendFile("../src/main.jsx");
});

app.listen(PORT, () => {
    console.log(`connected to port ${PORT}`);
})