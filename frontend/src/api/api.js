// Importamos o Axios
import axios from 'axios';

// Criamos a variável chamada api e atribuímos a ela axios.create, que será o início e a estrutura base do serviço de API que consumiremos
const api = axios.create({
    // Dentro da criação do Axios, temos uma propriedade chamada baseURL. Ela recebe o endpoint de sua aplicação, ou seja, a URL da API que será acessada. 
    baseURL: 'http://localhost:3333/api',
});

// Exportação da variável para ser utilizada em qualquer outra parte do código
export default api;