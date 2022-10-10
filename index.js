require('dotenv').config()
const express = require('express')
const Pokemon = require("./models/Pokemon")
const app = express()
const mongoose = require('mongoose')
const { Schema } = mongoose;

const { 
    createPokemon,
    getAllPokemon,
    getAPokemon,
    getPokemonImage,
    patchAPokemon,
    deleteAPokemon,
    upsertAPokemon,
    getSomePokemon

} = require('./controllers/pokemonController')

app.use(express.json())



const database = module.exports = () => {
    try {
        mongoose.connect('mongodb+srv://root:defnet55@pokemon-cluster.80zbuts.mongodb.net/?retryWrites=true&w=majority').then(() =>{
            app.listen(process.env.PORT, () => {
                console.log("Connected to Poke-base and looking for Poke-pals on port " + process.env.PORT)
            })
        });
    } catch (error) {
        console.log(error)
        console.log("Failed to connect")
    }
};
database();



app.get('/api/v1/allPokemon', getAllPokemon)

app.get('/api/v1/pokemon/:id', getAPokemon)

app.post('/api/v1/pokemon', createPokemon)

app.get('/api/v1/pokemonImage/:id', getPokemonImage)

app.patch('/api/v1/pokemon/:id', patchAPokemon)

app.put('/api/v1/pokemon/:id', upsertAPokemon)

app.delete('/api/v1/pokemon/:id', deleteAPokemon)

app.get('/api/v1/pokemons', getSomePokemon)

app.get('/', (req, res) => {
    res.send("I wanna be the very best, like no one ever was")
})

app.use((req, res, next) => {
    res.status(404).json({ msg: "Improper route. Check API docs plz." })
  })