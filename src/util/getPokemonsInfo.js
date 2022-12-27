
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
        {name: p1.name, id: p1.id, pic_url: p1.sprites.other.home.front_default, isMatched: false, isFlipped: false},
        {name: p2.name, id: p2.id, pic_url: p2.sprites.other.home.front_default, isMatched: false, isFlipped: false},
        {name: p3.name, id: p3.id, pic_url: p3.sprites.other.home.front_default, isMatched: false, isFlipped: false},
        {name: p4.name, id: p4.id, pic_url: p4.sprites.other.home.front_default, isMatched: false, isFlipped: false},
        {name: p5.name, id: p5.id, pic_url: p5.sprites.other.home.front_default, isMatched: false, isFlipped: false},
        {name: p6.name, id: p6.id, pic_url: p6.sprites.other.home.front_default, isMatched: false, isFlipped: false}
    ]
}
