import { ActionConstent } from "../constants/store"

export interface ActionType {
    type: ActionConstent
    payload?: any
}

export interface Drink {
    id: number
    name: string
    description: string
    consumed: boolean
    mg: number
}

export interface User {
    name?: "User",
    email?: "user@gmail.com",
    caffieneLimit?: 500
}

export interface ConsumedDrink extends Drink { }

export interface InitialStateType {
    drinks: Drink[]
    user: User
    intaken: number
    loader: boolean
}
