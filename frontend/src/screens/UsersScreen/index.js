import './usersScreen.css';
import Header from '../../components/Header';
import UserCard from '../../components/UserCard';

function UserScreen(){
    const users = [
        {
            id: 1,
            name: "Julia Soares",
            email: "julia@email.com",
        },
        {
            id: 2,
            name: "Amanda Telles",
            email: "amanda@email.com",
        },
        {
            id: 3,
            name: "Conceição Jatobá",
            email: "conceicao@email.com",
        },
        {
            id: 4,
            name: "Fernanda Brasil",
            email: "fernanda@email.com",
        },
    ]

    return(
        <>
            <Header title="Usuários cadastrados"/>
            <main className="mainUsersScreen">
                {users.map(user=> (
                    <UserCard id={user.id} name={user.name} email={user.email}/>
                ))}
            </main>
        </>
    )

}

export default UserScreen;