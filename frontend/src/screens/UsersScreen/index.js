import { useState, useEffect } from 'react';
import './usersScreen.css';
import Header from '../../components/Header';
import UserCard from '../../components/UserCard';
import api from '../../api/api';

function UsersScreen(){

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        async function getUsers(){
            const response = await api.get("/users");
            setUsers(response.data);
        };

        getUsers();

    },[])
    
    return(
        <>
            <Header title="Usuários cadastrados"/>
            <main className="main-users-screen">
                {users.map(user=> (
                    <UserCard 
                        id={user.id} 
                        name={user.name} 
                        email={user.email} 
                        addresses={user.addresses}
                    />
                ))}
            </main>
        </>
    )

}

export default UsersScreen;