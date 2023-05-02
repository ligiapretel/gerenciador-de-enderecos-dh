import { useState, useEffect } from 'react';
import './usersScreen.css';
import Header from '../../components/Header';
import UserCard from '../../components/UserCard';
import userServices from '../../services/userServices';

function UsersScreen(){

    const [users, setUsers] = useState([]);

    useEffect(()=>{    

        fetchData();    

    },[])
    
    async function fetchData(){
        try {            
            const response = await userServices.getUsers();                
            setUsers(response);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
            <Header title="Usuários cadastrados"/>
            <main className="main-users-screen">
                {users.map(user=> 
                    <UserCard 
                        key={user.id}
                        id={user.id} 
                        name={user.name} 
                        email={user.email} 
                        addresses={user.addresses}
                    />
                )}
            </main>
        </>
    )

}

export default UsersScreen;