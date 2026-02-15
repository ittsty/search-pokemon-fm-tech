import { gql } from "@apollo/client";
import { POKEMON_CORE } from "../fragments/pokemon.fragment";

export const GET_POKEMON = gql`
  query GetPokemon($name: String!) {
    pokemon(name: $name) {
      ...PokemonCore
      attacks {
        fast {
          name
          damage
        }
        special {
          name
          damage
        }
      }
      evolutions {
        ...PokemonCore
      }
    }
  }
  ${POKEMON_CORE}
`;
