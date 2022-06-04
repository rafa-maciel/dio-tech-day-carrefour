const path = 'http://localhost:8080'

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

export {
    getLikesByUserEmail,
    getProductsListFromCEP
}