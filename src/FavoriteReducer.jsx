import { upDateLocalStorage } from "./Helper/localSotorag"




export const favoriteReducer =  (state= [] , { type,payload }) => {
    switch (type) {

    case 'add':
        return [ ...state, payload ]
        break
    case 'remove':
        return state.filter(i => i != payload)
        break

    case 'find':
        return state.find(i => i == payload.id)
        break
    

    default:
        return state
    }
}
