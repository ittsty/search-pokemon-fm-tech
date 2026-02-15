import { Attack } from "@/types/pokemon";
import { memo } from "react";

interface Props {
  attacks: {
    fast: Attack[];
    special: Attack[];
  };
}

function PokemonAttacks({ attacks }: Props) {
  return (
    <div className="gap-4 mt-4 w-full space-y-2">
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-4">
        <h3 className="text-md font-semibold text-gray-800 mb-3 flex items-center gap-2">Fast Attacks</h3>
        <div className="space-y-2">
          {attacks.fast.map((a) => (
            <div
              key={a.name}
              className="flex justify-between items-center px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
            >
              <span className="font-sm text-gray-800">
                {a.name}
              </span>
              <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                {a.damage} dmg
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-4">
        <h3 className="text-md font-semibold text-gray-800 mb-3 flex items-center gap-2"> Special Attacks</h3>
        <div className="space-y-2">
          {attacks.special.map((a) => (
            <div
              key={a.name}
              className="flex justify-between items-center px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
            >
              <span className="font-sm text-gray-700">
                {a.name}
              </span>
              <span className="text-sm font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-md">
                {a.damage} dmg
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(PokemonAttacks);
