import { defineStore } from "pinia"

import { isEmpty, shuffle, makeCouples, getRndNumArr } from "../util/algorithms"
import {getPokemonsByArr} from '../util/getPokemonsInfo'

import { bgColorBytype } from '../util/getPokemonsInfo'

export const useGameStore = defineStore( 'game', {
    state: () => ({
        timesFliped: 0,
        matches: 0,
        misses: 0,
        lastPokemonCard: {},
        pokemons: [{}],
        blockedDeck: false,
        pokemonsCards: [
            {
                id: Number,
                name: String,
                url: String,
                isMatched: Boolean,
                isFlipped: Boolean,
                bg_color: String
            }
        ]
    }),

    getters: {
        noExistPokemons(state){
            return state.pokemonsCards.length == 1
        },
        getTimeFliped(state) {
            return state.timesFliped
        },
        getSinglePokemons(state) {
            return state.pokemons
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
        async getData(){
            var pokemonsIDs = getRndNumArr(6, 650) //make an arr of 6 random numbers between 0 and 650
            var pokemonsCouples = []

            this.pokemons = await getPokemonsByArr(pokemonsIDs)
            
            pokemonsCouples = makeCouples(this.pokemons)         //doubles de arr to make couples
            pokemonsCouples = shuffle(pokemonsCouples)      //shuffles all the objects into the array
            this.setPokeCards(pokemonsCouples)
        },

        setPokeCards(pokeArr){
            this.pokemonsCards = []

            pokeArr.forEach((pokeitem, index) =>{
                this.pokemonsCards.push(
                    {
                        id: index,
                        name: pokeitem.name,
                        pic_url: pokeitem.pic_url,
                        isMatched: pokeitem.isMatched,
                        isFlipped: pokeitem.isFlipped,
                        bg_color: bgColorBytype[pokeitem.types[0].type.name] 
                    }
                )
            })

            // console.log(this.pokemonsCards)
        },

        flipCard( pokeObj ) {
            if(this.blockedDeck) return

            if(pokeObj.isMatched || pokeObj.isFlipped) return // dont flip again 
            
            this.timesFliped++

            if(!pokeObj.isFlipped){
                this.pokemonsCards[pokeObj.id].isFlipped = true
            }

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
                const delay = 750
                this.blockedDeck = true     // it is not posible to flip another card while two cards are flipped
                setTimeout(()=>{
                    this.pokemonsCards[pokeObj.id].isFlipped = false
                    this.pokemonsCards[this.lastPokemonCard.id].isFlipped = false
    
                    this.misses++
                    this.lastPokemonCard = {}
                    this.blockedDeck = false
                }, delay)
            }
        },

        resetStore(){
            this.matches = 0
            this.timesFliped = 0
            this.misses = 0
        },

        async newGame(){
            this.resetStore()
            this.getData()
        }

    }
})