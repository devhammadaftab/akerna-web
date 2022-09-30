import { ActionConstent } from "../constants/store"

export interface ActionType {
    type: ActionConstent
    payload?: any
}

export interface Drink {
    id: number
    name: string
    description: string
    mg: number
}

export interface UserData {
    maximumIntake?: 0
}

export interface ConsumedDrink extends Drink {}

export interface InitialStateType {
    drinks: Drink[]
    consumedDrinks: ConsumedDrink[]
    userData: UserData
    intaken: number
    loader: boolean
}
