import { defineStore } from "pinia"

export const useGameStore = defineStore( 'game', {
    state: () => ({
        timesFliped: 0,
        matches: 0,
        misses: 0,
        lastPokemonName: '',
        // currentPokemon: '',
    }),

    getters: {
        getTimeFliped(state) {
            return state.timesFliped
        },
        getMatches(state){
            return state.matches
        },
        getMisses(state){
            return state.misses
        },
    },

    actions: {
        flipCard( pokeName, flipped ) {
            console.log(pokeName, flipped)

            if(this.lastPokemonName == ''){
                this.lastPokemonName = pokeName //first card flipped, no exist last data
            } else if(this.lastPokemonName == pokeName){
                //it is a match!!!
                this.matches++
                this.lastPokemonName = ''
            } else{
                // not a match, need to turn over the two cards
                this.misses++
                this.lastPokemonName = ''
            }

            this.timesFliped++
        },

    }
})