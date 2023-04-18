import './addressesScreen.css';
import Header from '../../components/Header';
import AddressCard from '../../components/AddressCard';

function AddressesScreen(){
    const addresses = [
        {        
            id: 1,
            postalCode: "01225000", 
            street: "Rua da Alegria", 
            houseNumber: "27",
            city: "Cunha",
        },
        {        
            id: 2,
            postalCode: "03258123", 
            street: "Rua da Esperança", 
            houseNumber: "581",
            city: "São Tomé das Letras",
        },
        {        
            id: 3,
            postalCode: "02822100", 
            street: "Rua da Amorosidade", 
            houseNumber: "85",
            city: "Bananal",
        },   
   ]

    return(
        <>
            <Header title={"Endereços cadastrados"}/>
            <main>
                {addresses.map(address=>(
                    <AddressCard
                        key={address.id} 
                        id={address.id} 
                        postalCode={address.postalCode} 
                        street={address.street} 
                        houseNumber={address.houseNumber}
                        city={address.city}
                    />
                ))}
            </main>
        </>
    );
}

export default AddressesScreen;