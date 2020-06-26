const express = require('express')
const morgan = require('morgan')


const app = express()

app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.json({
        message : "Welcome to MERN Stack Project"
    })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    
})