import './header.css';

function Header({title}){
    return(
        <header>
            <div className="container-menu">
                <a className="menu-item" href="#">Usuários</a>
                <a className="menu-item" href="#">Cadastrar usuário</a>
                <a className="menu-item" href="#">Cadastrar endereço</a>
            </div>
            <h1 className="title">{title}</h1>
        </header>
    );
}

export default Header;