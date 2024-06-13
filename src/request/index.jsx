import React, { useState } from "react"
import axios from "axios"

export default function GetCep() {

    const [cep, setCep] = useState(null)
    const [address, setAddress] = useState(null)


    async function handleAddress() {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            setAddress(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex flex-col">

        <div className="flex flex-col items-center justify-center gap-4">

            <h1 className="text-4xl text-blue-600">Buque seu cep aqui</h1>

            <input placeholder="digite seu cep" type="number" className="p-2 border-solid border-blue-800 rounded-md" name="" id="" onChange={(e) => setCep(e.target.value)}/>

            <button type="button" onClick={handleAddress} >Buscar</button>

        </div>

        {
            address && 

            <div>
                <p>Rua: {address.logradouro}</p>
                <p>DDD: {address.ddd}</p>
                <p>Bairro: {address.bairro}</p>
                <p>Cidade: {address.localidade}</p>
            </div>
        }

        </div>
    )
}