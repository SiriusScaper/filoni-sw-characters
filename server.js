const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8888

app.use(cors())

const swCharacters = {
    'Ahsoka Tano': {
        'currentAge': 45,
        'birthPlanet': 'Shili'
    },
    'unknown':{
        'currentAge': 0,
        'birthPlanet': 'unknown',
    }
}
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(req,res)=>{
    const characterName = req.params.name.toLowerCase()

    if( swCharacters[characterName] ){
        res.json(swCharacters[characterName])
    }else{
        res.json(swCharacters['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! The Imps will never catch it!`)
})