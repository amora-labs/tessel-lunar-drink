// all modules are asynchronous and promises-based
// request axios module
import { requester as http } from './http'

const makeDrink = drink => {
    return http.get(`make/drink/${drink}`, {})
}

export {
    makeDrink
}
