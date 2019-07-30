import axios from 'axios';

// const api = axios.create({baseURL: ''});

const api = {
    data:[
        {
            "tipo":"Dolar",
            "nome":"Dolar Americano",
            "sigla":"USD",
            "dias":[29,28,27,26,25],
            "cotacoes":[2.50,3.20,3.40,3.10,2.80]
        },
        {
            "tipo":"Euro",
            "nome":"Euro",
            "sigla":"EUR",
            "dias":[29,28,27,26,25],
            "cotacoes":[3.50,3.10,2.10,1.10,6.80]
        },
        {
            "tipo":"Libra",
            "nome":"Libra",
            "sigla":"LIB",
            "dias":[29,28,27,26,25],
            "cotacoes":[3.50,3.10,2.10,1.10,6.80]
        },
        {
            "tipo":"Iene",
            "nome":"Iene",
            "sigla":"Iene",
            "dias":[29,28,27,26,25],
            "cotacoes":[3.50,3.10,2.10,1.10,6.80]
        }
    ]
}

export default api;