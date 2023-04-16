import './notFoundScreen.css'
import notFoundImg from '../../assets/not-found.svg'
import Header from '../../components/Header';

function NotFoundScreen(){
    return(
        <>
            <Header title={'Ops!'}/>
            <main className='main-not-found'>
                <img src={notFoundImg} className='img-not-found'/>
                <p>Página não encontrada</p>
            </main>
        </>
    );    
};

export default NotFoundScreen;