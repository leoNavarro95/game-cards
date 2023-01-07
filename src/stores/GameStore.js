import { defineStore } from "pinia"

import { isEmpty } from "../util/algorithms"

export const useGameStore = defineStore( 'game', {
    state: () => ({
        timesFliped: 0,
        matches: 0,
        misses: 0,
        lastPokemonCard: {},
        pokemonsCards: [
            {
                id: Number,
                name: String,
                url: String,
                isMatched: Boolean,
                isFlipped: Boolean
            }
        ]
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
        getPokeCards(state){
            return state.pokemonsCards
        }
    },

    actions: {
        setPokeCards(pokeArr){
            this.pokemonsCards = []

            pokeArr.forEach((pokeitem, index) =>{
                this.pokemonsCards.push(
                    {
                        id: index,
                        name: pokeitem.name,
                        pic_url: pokeitem.pic_url,
                        isMatched: pokeitem.isMatched,
                        isFlipped: pokeitem.isFlipped
                    }
                )
            })

            console.log(this.pokemonsCards)
        },

        flipCard( pokeObj ) {
            console.log(pokeObj)
            
            if(pokeObj.isMatched) return // dont flip again 
            
            this.timesFliped++

            if(!pokeObj.isFlipped){
                this.pokemonsCards[pokeObj.id].isFlipped = true
            }

            console.log(isEmpty(this.lastPokemonCard))

            if(isEmpty(this.lastPokemonCard)){
                // this.lastPokemonCard = pokeObj //first card flipped, no exist last card flipped
                Object.assign( this.lastPokemonCard, pokeObj )

            } else if(this.lastPokemonCard.name == pokeObj.name){
                //it is a match!!!
                this.pokemonsCards[pokeObj.id].isMatched = true
                this.pokemonsCards[this.lastPokemonCard.id].isMatched = true
                this.matches++
                this.lastPokemonCard = {}
            } else{
                // not a match, need to turn over the two cards
                // need to wait a delay to show the second card
                const delay = 1500
                setTimeout(()=>{
                    this.pokemonsCards[pokeObj.id].isFlipped = false
                    this.pokemonsCards[this.lastPokemonCard.id].isFlipped = false
    
                    this.misses++
                    this.lastPokemonCard = {}
                }, delay)
            }
        },

    }
})