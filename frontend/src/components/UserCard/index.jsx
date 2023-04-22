import './userCard.css';
import { Link } from 'react-router-dom';

function UserCard({ id, name, email, addresses }){
    return(
        <div className="user-card">
            <span className="user-id"> Id: {id}</span>
            <span className="user-info"> Nome: {name}</span>
            <span className="user-info"> Email: {email}</span>
            <div className="container-user-addresses">
                <div className="container-title-address">
                    <span className="user-addresses">Endereços</span>
                    <Link to={"/enderecos-registro/"+id} className="add">
                        <span>+</span>
                    </Link>
                </div>
                    {addresses.map(address=>(
                        <div className="user-address-info" key={address.id}>
                            <span> CEP: {address.postal_code}</span>
                            <span> {address.street},</span>
                            <span> {address.house_number}</span>
                            <span> {address.city}</span>
                        </div>
                ))}
            </div>            
        </div>
    );
}

export default UserCard;