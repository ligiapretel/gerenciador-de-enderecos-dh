import './addressFormScreen.css';
import Header from '../../components/Header';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api/api';

function AddressFormScreen(){

    let { userId } = useParams();

    const [ postalCode, setPostalCode ] = useState('');
    const [ street, setStreet ] = useState('');
    const [ houseNumber, setHouseNumber ] = useState('');
    const [ city, setCity ] = useState('');
    const [ name, setName ] = useState('');

    const navigate = useNavigate();

    //Função que captura o nome do usuário logo que o componente é renderizado
    useEffect(()=>{
        async function getUser(){
            const response = await api.get(`/users/${userId}`)
            setName(response.data.name);
        }
        getUser();
    },[]);

    async function handleSubmit(event){
        event.preventDefault();

        await api.post(`/addresses/${userId}`,{
            postal_code: postalCode,
            street,
            house_number: houseNumber,
            city,
            user_id: userId,
        });

        setPostalCode('');
        setStreet('');
        setHouseNumber('');
        setCity('');

        alert("Endereço cadastrado com sucesso");

        navigate("/");
    }

    return(
        <>
            <Header title={`Cadastro de endereço de ${name}`}/>        
            <main className="main-address-form">
                <form onSubmit={handleSubmit} className="address-form">
                    <label>Cep</label>
                    <input 
                        type="text"
                        value={postalCode} 
                        onChange={event=>setPostalCode(event.target.value)}
                    />
        
                    <label>Logradouro</label>
                    <input 
                        type="text"
                        value={street}                 
                        onChange={event=>setStreet(event.target.value)}
                    />

                    <label>Número</label>
                    <input 
                        type="text"
                        value={houseNumber}                 
                        onChange={event=>setHouseNumber(event.target.value)}
                    />

                    <label>Cidade</label>
                    <input 
                        type="text"
                        value={city}                 
                        onChange={event=>setCity(event.target.value)}
                    />
                    
                    <button type="submit">Enviar</button> 
                </form>
            </main>
        </>
    );
}

export default AddressFormScreen;