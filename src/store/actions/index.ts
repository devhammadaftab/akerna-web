import { ActionConstent} from "constants/store";
import { Drink } from "interfaces";

export const setDrinks = (payload: Drink) => {
    return { type: ActionConstent.SET_DRINKS, payload }
}

export const setConsumedDrink = (id: number) => {
    return { type: ActionConstent.SET_CONSUMED_DRINKS, payload: { id } }
}

export const setLoader = (payload: boolean) => {
    return { type: ActionConstent.SET_APP_LOADER, payload: payload }
}
