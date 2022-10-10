const Pokemon = require("../models/Pokemon")

const getSomePokemon = async (req, res) => {
    const {count, after} = req.query
    countIndex = 0
    let allPokemon = await Pokemon.find({}).sort({id: 1}).skip(after).limit(count)
    return res.status(200).send(allPokemon)

}

const getAPokemon = async (req, res) => {
    const { id } = req.params
    const pokemon = await Pokemon.find({id : id})
    if(!pokemon.length){
        return res.status(405).json({error: "No such Pokemon"})
    }

    res.status(200).json(pokemon)
}

const getAllPokemon = async (req, res) => {
    const pokemon = await Pokemon.find({}).sort({id: -1});

    res.status(200).json(pokemon)
}

const getPokemonImage = async (req, res) => {
    const {id} = req.params
    paddedId = lpad(id, 3)
    if(id > 0 && id <= 809){
        imageURL = "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/" + paddedId + ".png"
    } else {
        return res.json({msg : "ID Is out of range of existing pokemon :("})
    }
    
    res.send(imageURL)
}
//Quick comment

const patchAPokemon = async (req, res) => {
    const {id, name, type, base} = req.params
    pokemonDoc = await Pokemon.find({id : id})

    if (!pokemonDoc.length){
        return res.status(404).json({msg: "Pokemon Not Found for update"})
    }

    const pokemonToUpdate = await Pokemon.findOneAndUpdate({id: id}, {
        ...req.body
    })

    res.status(200).json(pokemonToUpdate)
}

const upsertAPokemon = async (req, res) => {
    const {id, name, type, base} = req.params
    pokemonDoc = await Pokemon.find({id : id})

    const pokemonToUpdate = await Pokemon.findOneAndUpdate({id: id}, {
        ...req.body
    }, {upsert: true})

    res.status(200).json(pokemonToUpdate)
}


const deleteAPokemon = async (req, res) => {
    const { id } = req.params
    const pokemon = await Pokemon.find({id : id})
    if(!pokemon.length){
        return res.status(404).json({error: "No such Pokemon"})
    }

    await Pokemon.findOneAndDelete({id : id}).then(() =>{
        res.status(200).send("Pokemon " + id + " successfully deleted.")
    })
    
}

function lpad(value, padding) {
    var zeroes = new Array(padding+1).join("0");
    return (zeroes + value).slice(-padding);
}

const createPokemon = async (req, res) => {
    const {id, name, type, base} = req.body
    existingPokemon = await Pokemon.find({id: id})
    if(!existingPokemon.length){
        try{
            const pokemon = await Pokemon.create({id, name, type, base})
            res.status(200).json(pokemon)
        } catch(error){
            res.status(400).json({error: error.message})
        }
    } else {
        res.status(400).json(existingPokemon)
    }
    
}

module.exports = {
    createPokemon,
    getAllPokemon,
    getAPokemon,
    getPokemonImage,
    patchAPokemon,
    deleteAPokemon,
    upsertAPokemon,
    getSomePokemon
}