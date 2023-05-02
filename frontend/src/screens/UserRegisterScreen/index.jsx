import { useState } from "react";
import "./userRegisterScreen.css";
import Header from "../../components/Header";
import userServices from "../../services/userServices";

function UserRegisterScreen(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    async function handleSubmit(event){
        event.preventDefault();

        try {
          await userServices.createUser({name, email});
          
          setName("");
          setEmail("");
          
          alert("Usuário cadastrado");          
        } catch (error) {
          console.log(error);
        }
    }
   
    return (
      <>
        <Header title="Cadastro de usuário"/>        
        <main className="main-user-register">
          <form onSubmit={handleSubmit} className="register-form">
            <label>Nome</label>
            <input 
              type="text" 
              value={name}
              onChange={event => setName(event.target.value)}
            />
  
            <label>E-mail</label>
            <input 
              type="email" 
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            
            <button type="submit">Enviar</button> 
          </form>
        </main>
      </>
    );
}

export default UserRegisterScreen;