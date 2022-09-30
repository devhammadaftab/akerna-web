import { InitialStateType, ActionType } from 'interfaces'
import { ActionConstent } from 'constants/store'
import initialState from 'store/states';

const reducer = (state: InitialStateType, actions: ActionType) => {
    switch (actions.type) {
        case ActionConstent.SET_DRINKS:
            return {
                ...state,
                drinks: actions.payload
            }
        case ActionConstent.SET_CONSUMED_DRINKS:
            return {
                ...state,
                consumedDrinks: [
                    ...state.consumedDrinks,
                    state.drinks.find(drink => drink.id === actions.payload.id)
                ]
            }
        case ActionConstent.SET_USER_DATA:
            return {
                ...state,
                userData: actions.payload
            }
        case ActionConstent.SET_APP_LOADER:
            return {
                ...state,
                loader: actions.payload
            }
        default:
            return state
    }
}

export default reducer