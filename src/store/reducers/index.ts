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
        case ActionConstent.SET_CONSUMED_DRINK:
            initialState.drinks = [...state.drinks];
            let index = initialState.drinks.findIndex(drink => drink.id === actions.payload.id);
            initialState.drinks[index] = {
                ...initialState.drinks[index],
                consumed: true
            }
            return {
                ...state,
                drinks: initialState.drinks
            }
        case ActionConstent.SET_USER_DATA:
            return {
                ...state,
                user: actions.payload
            }
        case ActionConstent.SET_IN_TAKEN:
            return {
                ...state,
                intaken: state.intaken + actions.payload
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