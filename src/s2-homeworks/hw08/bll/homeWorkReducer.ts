import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortState = [...state].sort((a, b) => {
                return (
                    action.payload === 'up' ?
                    b.name.length - a.name.length :
                    a.name.length - b.name.length 
                )
            }) 
            return sortState; // need to fix
        }
        case 'check': {
            const sortState = state.filter((user: UserType) => user.age >= action.payload)
            console.log(sortState)
            return sortState; // need to fix
        }
        default:
            return state 
    }
}
