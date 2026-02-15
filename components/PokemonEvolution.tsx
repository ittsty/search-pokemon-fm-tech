import Link from "next/link";

type EvolutionProps = {
  id: string;
  name: string;
  image: string;
};

const PokemonEvolution = ({ evolutions }: { evolutions: EvolutionProps[] }) => {
  return (
    <>
      {evolutions.map((item) => {
        return (
          <Link key={item.name} href={`/?name=${item.name}`} className="flex flex-col justify-center items-center gap-4 hover:shadow-md hover:bg-gray-200 p-2 transition-all rounded-2xl">
              <div className="img-holder bg-white w-40 aspect-square flex justify-center items-center p-2 overflow-hidden rounded-xl">
                <img src={item.image} width={160} className="p-2" />
              </div>
              <h2 className="w-full text-center rounded-full">
                {item.name}
              </h2>
          </Link>
        );
      })}
    </>
  );
};

export default PokemonEvolution;
