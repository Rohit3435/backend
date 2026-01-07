// const express = require('express')
// const app = express()
// const port = 4000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// //defined by rohit
// app.get('/insta',(req,res)=>{
//     res.send('How are you?')
// })



// //similarly this one is defined by using one of the property or functionalities of express and ultimately callback is used
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

//console.log("wow");

//using dotenv
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//defined by rohit
app.get('/insta',(req,res)=>{
    res.send('How are you?')
})



//similarly this one is defined by using one of the property or functionalities of express and ultimately callback is used
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

