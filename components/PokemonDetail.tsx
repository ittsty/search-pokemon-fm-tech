"use client";

import { GET_POKEMON } from "@/graphql/queries/pokemon.query";
import { Pokemon } from "@/types/pokemon";
import { useQuery } from "@apollo/client/react";
import PokemonAttack from "./PokemonAttack";
import PokemonEvolution from "./PokemonEvolution";
import TypeBadge from "./TypeBadge";

const PokemonDetail = ({ name }: { name: string }) => {
  const { data, loading, error } = useQuery<{ pokemon: Pokemon }>(GET_POKEMON, {
    variables: { name },
    skip: !name,
  });
  if (!name) return <p>Type a Pokémon name to search</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-2xl text-red-600 font-semibold">Error loading Pokémon</p>;
  if (!data?.pokemon) return <p className="text-lg text-red-600 font-semibold">Pokémon not found</p>;

  const pokemon = data.pokemon;
  return (
    <div className="max-w-xl md:max-w-7/10 w-full bg-sky-100 rounded-2xl shadow-lg p-8 mt-4 flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full">
        <div className="img-holder bg-white md:w-4/10 aspect-square flex justify-center items-center rounded-2xl p-2 shadow-xl overflow-hidden">
          <img src={pokemon.image} alt={pokemon.name} className="p-8" />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-6/10 items-center justify-center">
          <h2 className="text-3xl font-semibold ">{pokemon.name}</h2>
          <div className="flex gap-2 mt-1">
            {pokemon.types.map((type) => (
              <TypeBadge key={type} type={type} />
            ))}
          </div>
          <PokemonAttack attacks={pokemon.attacks}/>
        </div>
      </div>
      <div className="bg-white flex flex-col justify-center items-center mt-2 p-4 shadow-xl rounded-2xl w-full gap-2">
        <h2 className="text-2xl font-semibold">Evolution </h2>
        <div className="flex justify-center items-center gap-2">
          {pokemon.evolutions?.length ? (
            <PokemonEvolution evolutions={pokemon.evolutions} />
          ) : (
            <p>No evolutions</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
