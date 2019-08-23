import React, { useState } from 'react';

import api from '../services/api';

export default function Admin(){
    const [description, price, setDescription, setPrice ] = useState('');
    
    async function handleSubmit(e){        
        e.preventDefault();

        const data = {
            name:  description,
            value: price,
            category: "expense"
        }
        
        await api.post('/camp', data);

        //const { _id } = response.data;

        //history.push(`/dev/${_id}`);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Descrição" 
                    value={description}
                    onChange={e => setDescription(e.target.value) }
                />
                {/* <input 
                    placeholder="Valor" 
                    value={price}
                    onChange={e => setPrice(e.target.value) }
                /> */}
                <button type="submit" >Enviar</button>

            </form>
        </div>
    )
}