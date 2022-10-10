import axios from "../axios";

const drinks = {
    get: async () => {
        return await new Promise((resolve, reject) => resolve([{
                id: 0,
                name: "Monster Ultra Sunrise ",
                description: "A refreshing orange beverage that has 75mg of caffeine per serving. Every can has two servings.",
                mg: 75
            }, {
                id: 1,
                name: "Black Coffee",
                description: "The classic, the average 8oz. serving of black coffee has 95mg of caffeine.",
                mg: 95
            }, {
                id: 2,
                name: "Americano",
                description: "Sometimes you need to water it down a bit... and in comes the americano with an average of 77mg. of caffeine per serving.",
                mg: 77
            }, {
                id: 3,
                name: "Sugar free NOS",
                description: "Another orange delight without the sugar. It has 130 mg. per serving, and each can have two servings.",
                mg: 130
            }, {
                id: 4,
                name: "5 Hour Energy",
                description: "And amazing shot of get up and go! Each 2 fl. oz. container has 200mg of caffeine to get you going.",
                mg: 200
            }])
        )
    }
}

export default drinks