"use client";

import { GET_POKEMON } from "@/graphql/queries/pokemon.query";
import { Pokemon } from "@/types/pokemon";
import { useQuery } from "@apollo/client/react";

const PokemonDetail = ({ name }: { name: string }) => {
  const { data, loading, error } = useQuery<{ pokemon: Pokemon }>(GET_POKEMON, {
    variables: { name },
    skip: !name,
  });
  if (!name) return <p>Type a Pokémon name to search</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading Pokémon</p>;
  if (!data?.pokemon) return <p>Pokémon not found</p>;

  const pokemon = data.pokemon;
  return (
    <div className="max-w-xl bg-white rounded-2xl shadow-lg p-8 mt-4">
      <h2 className="text-black">{pokemon.name}</h2>
      <img src={pokemon.image} width={200} />
      <p>Types: {pokemon.types.join(", ")}</p>
    </div>
  );
};

export default PokemonDetail;
