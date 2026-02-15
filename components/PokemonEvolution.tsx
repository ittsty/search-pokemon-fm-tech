import Link from "next/link";

type EvolutionProps = {
  id: string;
  name: string;
  image: string;
};

const PokemonEvolution = ({ evolutions }: { evolutions: EvolutionProps[] }) => {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      {evolutions.map((pokemon) => {
        return (
          <Link key={pokemon.name} href={`/?name=${pokemon.name}`} className="flex flex-col justify-center items-center gap-4 hover:shadow-md hover:bg-gray-200 p-2 transition-all rounded-2xl">
              <div className="img-holder bg-white w-40 aspect-square flex justify-center items-center p-2 overflow-hidden rounded-xl">
                <img src={pokemon.image}alt={pokemon.name} width={160} className="p-2" />
              </div>
              <h2 className="w-full text-center rounded-full">
                {pokemon.name}
              </h2>
          </Link>
        );
      })}
    </div>
  );
};

export default PokemonEvolution;
