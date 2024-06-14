import React, { useState } from "react"
import axios from "axios"

export default function GetPokemon() {

    const [pokedex, setPokedex] = useState(null)
    const [pokemon, setPokemon] = useState(null)

    async function handlePokemon() {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            setPokedex(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex items-center justify-center flex-col gap-5">
            <h1>Procure seu pokemon favorito!</h1>
            <input type="text" onChange={(e) => setPokemon(e.target.value) } />
            <button onClick={handlePokemon}>buscar</button>


            {
              pokedex &&   
                        
                        <div className="mb-3 shadow-2xl shadow-gray-600 mt-11 rounded-lg p-4 flex flex-col items-center justify-center w-20 h-30 gap-3">
                            <p>{pokedex.name}</p>
                            <img src={pokedex.sprites.front_default} alt="" />
                            <p>shiny:</p>
                            <img src={pokedex.sprites.front_shiny} alt="" />
                        </div>

            }

        </div>
    )
}