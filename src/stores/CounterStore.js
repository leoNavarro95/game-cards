import { defineStore } from "pinia"

export const useCounterStore = defineStore( 'counter', {
    state: () => ({
        counter: 0
    }),

    getters: {
        count(state) {
            return state.counter
        }
    },

    actions: {
        increment() {
            this.counter++
        },
        decrement() {
            this.counter--
        }
    }
})