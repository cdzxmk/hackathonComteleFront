import axios from 'axios';

// const api = axios.create({baseURL: ''});

const api = {
    docs:[
        {
            "tipo":"Dolar",
            "nome":"Dolar Americano",
            "sigla":"USD",
            "dias":[29,28,27,26,25],
            "cotacoes":[2.50,3.20,3.40,3.10,2.80,4,4.14,3.70,3.10,5]
        },
        {
            "tipo":"Euro",
            "nome":"Euro",
            "sigla":"EUR",
            "dias":[29,28,27,26,25],
            "cotacoes":[3.50,3.10,2.10,1.10,6.80,5.40,3.14,7.70,1.10,9]
        }
    ]
}

export default api;