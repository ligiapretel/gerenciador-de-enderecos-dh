import './addressCard.css'

function AddressCard({id, postalCode, street, houseNumber, city}){
    return(
        <div>
            <span>Id: {id}</span>
            <span>CEP: {postalCode}</span>
            <span>Rua: {street}</span>
            <span>Número: {houseNumber}</span>
            <span>Cidade: {city}</span>
        </div>
    );
}

export default AddressCard;