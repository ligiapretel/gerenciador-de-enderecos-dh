import "./userRegisterScreen.css";
import Header from "../../components/Header";

function UserRegisterScreen(){

    function handleSubmit(event){
        event.preventDefault();
      }
    
      return (
        <>
          <Header title="Cadastro de usuário"/>        
          <main>
            <form onSubmit={handleSubmit}>
              <label>Nome</label>
              <input type="text"/>
    
              <label>E-mail</label>
              <input type="email"/>
    
              <label>Senha</label>
              <input type="password"/>  
              
              <button type="submit">Enviar</button> 
            </form>
          </main>
        </>
      );
}

export default UserRegisterScreen;