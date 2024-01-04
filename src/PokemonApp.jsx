import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {
    const { page, isLoading, pokemons } = useSelector(state => state.pokemons);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons(0));
    }, []);

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />

            <span>Loading: {isLoading ? 'True' : 'False'}</span>

            <ul>
                {
                    pokemons.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>
                    )
                }
            </ul>

            <p>{page}</p>

            <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>Next</button>
        </>
    )
}