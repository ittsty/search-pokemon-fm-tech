import { gql } from "@apollo/client";

export const POKEMON_CORE = gql`
  fragment PokemonCore on Pokemon {
    id
    name
    image
    types
  }
`;
