import React, { useState } from "react";
import axios from "axios";

export default function GetCp() {
    const [address, setAddress] = useState(null)
    const [cep, setCep] = useState(null)

    console.log(cep)
    console.log(address)

    async function getAddress() {
        try {
          const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
          setAddress(response.data)
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }

    return (
        <div className="flex flex-col gap-4">
            <h2>Busca Cep</h2>
            <input type="number" name="" id="" onChange={e => setCep(e.target.value)} />
            <button type="button" onClick={getAddress}>Buscar</button>

        {address && 

            <div className="flex flex-col gap-4 mt-09"> 
                <p>{address.logradouro}</p>  
                <p>{address.bairro}</p>  
                <p>{address.cep}</p>  
                <p>{address.ddd}</p>  

            </div>
        
        }


        </div>
    )
}