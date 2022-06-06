import Axios from 'axios'

const path = 'http://localhost:8080'

const createAxios = () => {
    let apiSettings = {
        baseURL: path,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': true
        }
    }

    return Axios.create(apiSettings)
}

const headers = {
    method: 'get',
    cache: 'default',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': true
}

function getLikesByUserEmail(email) {
    var url = `${path}/likes?email=${email}`
    return fetch(url, headers)
        .then((response) => response.json())
}

function getProductsListFromCEP(cep) {
    var url = `${path}/products?cep=${cep}`
    return fetch(url, headers)
        .then((response) => response.json())
}

function addLikedProduct(productId, email) {
    const axios = createAxios()
    var data = { productId, email }

    return axios.post('/likes', data);

    
    // console.log(JSON.stringify(data))

    // return fetch(url, {
    //     headers: {
    //         method: 'post', 
    //         body: JSON.stringify(data),
    //         'Content-Type': 'application/json',
    //     }})
    //     .then((response) => response.json())
}

export {
    getLikesByUserEmail,
    getProductsListFromCEP,
    addLikedProduct
}