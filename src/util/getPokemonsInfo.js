
import {pokemonByNumber} from '../api/PockemonAPI'

export const getPokemonsByArr = async ( [pokeNum1, pokeNum2, pokeNum3, pokeNum4, pokeNum5, pokeNum6] = [] ) => {

    const promiseArr = [
        pokemonByNumber(pokeNum1),
        pokemonByNumber(pokeNum2),
        pokemonByNumber(pokeNum3),
        pokemonByNumber(pokeNum4),
        pokemonByNumber(pokeNum5),
        pokemonByNumber(pokeNum6)
    ]

    const [p1, p2, p3, p4, p5, p6] = await Promise.all(promiseArr)

    return [
        {name: p1.name, id: p1.id, pic_url: p1.sprites.other.home.front_default, experience: p1.base_experience, height: p1.height, weight: p1.weight, stats: p1.stats, types: p1.types , isMatched: false, isFlipped: false},
        {name: p2.name, id: p2.id, pic_url: p2.sprites.other.home.front_default, experience: p2.base_experience, height: p2.height, weight: p2.weight, stats: p2.stats, types: p2.types , isMatched: false, isFlipped: false},
        {name: p3.name, id: p3.id, pic_url: p3.sprites.other.home.front_default, experience: p3.base_experience, height: p3.height, weight: p3.weight, stats: p3.stats, types: p3.types , isMatched: false, isFlipped: false},
        {name: p4.name, id: p4.id, pic_url: p4.sprites.other.home.front_default, experience: p4.base_experience, height: p4.height, weight: p4.weight, stats: p4.stats, types: p4.types , isMatched: false, isFlipped: false},
        {name: p5.name, id: p5.id, pic_url: p5.sprites.other.home.front_default, experience: p5.base_experience, height: p5.height, weight: p5.weight, stats: p5.stats, types: p5.types , isMatched: false, isFlipped: false},
        {name: p6.name, id: p6.id, pic_url: p6.sprites.other.home.front_default, experience: p6.base_experience, height: p6.height, weight: p6.weight, stats: p6.stats, types: p6.types , isMatched: false, isFlipped: false}
    ]
}

export const bgColorBytype = {
    normal: 'bg-amber-300',
    fighting: 'bg-red-600',
    flying: 'bg-violet-400',
    poison: 'bg-violet-600',
    ground: 'bg-amber-900',
    rock: 'bg-gray-600',
    bug: 'bg-yellow-500',
    ghost: 'bg-violet-700',
    steel: 'bg-gray-500',
    fire: 'bg-orange-500',
    water: 'bg-blue-600',
    grass: 'bg-green-500',
    electric: 'bg-yellow-300',
    psychic: 'bg-pink-400',
    ice: 'bg-blue-300',
    dragon: 'bg-purple-800',
    dark: 'bg-gray-800',
    fairy: 'bg-pink-700',
}
 
