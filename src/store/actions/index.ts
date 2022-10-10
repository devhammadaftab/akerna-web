import { ActionConstent} from "constants/store";
import { Drink } from "interfaces";
import { drinks, user } from "endpoints";

export const setDrinks = (payload: Drink) => {
    return { type: ActionConstent.SET_DRINKS, payload }
}

export const setConsumedDrink = (id: number) => {
    return { type: ActionConstent.SET_CONSUMED_DRINK, payload: { id } }
}

export const setInTaken = (payload: number) => {
    return { type: ActionConstent.SET_IN_TAKEN, payload: payload }
}

export const setLoader = (payload: boolean) => {
    return { type: ActionConstent.SET_APP_LOADER, payload: payload }
}

export const getDrinks = async () => {
    let data = await drinks.get();
    return { type: ActionConstent.SET_DRINKS, payload: data }
}

export const setUser = async () => {
    let data = await user.get();
    return { type: ActionConstent.SET_USER_DATA, payload: data }
}
