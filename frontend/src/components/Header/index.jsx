import './header.css';
import { NavLink, Link } from 'react-router-dom';

function Header({title}){
    return(
        <header>
            <div className="container-menu">
                <NavLink to="/" className="menu-item">Usuários</NavLink>
                <NavLink to="/registro" className="menu-item">Cadastrar usuário</NavLink>                
                {/* <NavLink to="/enderecos" className="menu-item">Cadastrar endereço</NavLink> */}
            </div>
            <h1 className="title">{title}</h1>
        </header>
    );
}

export default Header;