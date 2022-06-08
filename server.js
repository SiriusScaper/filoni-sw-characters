const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8888

app.use(cors())

const swCharacters = {
    'Ahsoka Tano': {
        'currentAge': 45,
        'sex': 'Female',
        'species': 'Togruta',
        'birthPlanet': 'Shili',
        'firstAppearance': 'Star Wars: The Clone Wars',
        'firstLiveAction': 'Star Wars: The Mandolorian',
        'Affiliations': ['Jedi Order', 'Galactic Republic', '501st Legion', 'Bail Organas Resistance', 'Rebel Intelligence', 'Phoenix Cell'],
    },
    'Sabine Wren': {
        'currentAge': 30,
        'sex': 'Female',
        'species': 'Human',
        'birthPlanet': 'Mandalore',
        'firstAppearance': 'Star Wars: Rebels',
        'firstLiveAction': 'Star Wars: Ahsoka',
        'Affiliations': ['House Vizsla', 'Clan Wren', 'Galactic Empire', 'Alliance to Restore the Republic', 'Spectres', 'Phoenix Cell', 'Mandalorian resistance'],
    },
    'unknown':{
        'Jedi': false,
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