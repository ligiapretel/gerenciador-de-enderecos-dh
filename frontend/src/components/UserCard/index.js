import './userCard.css';

function UserCard({ id, name, email, addresses }){
    return(
        <div className="user-card">
            <span className="user-id"> Id: {id}</span>
            <span className="user-info"> Nome: {name}</span>
            <span className="user-info"> Email: {email}</span>
            <div className="container-user-addresses">
                <span className="user-addresses">Endereços</span>
                    {addresses.map(address=>(
                        <div className="user-address-info">
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