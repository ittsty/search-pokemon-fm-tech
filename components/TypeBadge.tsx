import { typeColors } from "@/types/pokemontype";

const TypeBadge = ({ type }: { type: string }) => {
  return (
    <span
      className={`px-3 py-1 rounded-full text-md font-semibold text-white capitalize ${typeColors[type.toLowerCase()] || "bg-gray-400"}`}
    >
      {type}
    </span>
  );
};

export default TypeBadge