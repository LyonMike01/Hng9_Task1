const { urlencoded } = require('express')
const express= require('express')
const cors = require("cors")

const app = express()
const port = process.env.PORT || 4040;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors({
    origin:"*"
}));

console.log ("ok")

app.get("/", (req, res) => {
    res.json({ 
        "slackUsername": "Lyonmike01", 
        "backend": true, 
        "age": 20, 
        "bio": "My name is Titiloye Temitope Michael, I'm a Backend Web Developer with good work rate" 
    })
    })


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
  
