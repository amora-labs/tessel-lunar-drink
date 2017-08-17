// all modules are asynchronous and promises-based
// request axios module
import { requester as http } from './http'

const makeDrink = drink => {
    return new Promise((resolve, reject) => {
        http.get(`main/make/drink/${drink}`, {})
        .then(response => response.data)
        .then(data => resolve(data))
    })
    .catch(e => {
        console.error(e)
    })
}

export {
    makeDrink
}
