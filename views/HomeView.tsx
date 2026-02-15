"use client";

import PokemonDetail from "@/components/PokemonDetail";
import Searchbar from "@/components/Searchbar";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const HomeView = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") ?? "";
  return (
    <main className="min-h-screen bg-linear-to-br from-yellow-100 to-sky-200 flex flex-col items-center justify-center p-6 text-black">
      <section className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 mb-2">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Pokémon Search
        </h1>
        <Suspense fallback={<p>Loading search...</p>}>
          <Searchbar />
        </Suspense>
      </section>
      <PokemonDetail name={name} />
    </main>
  );
};

export default HomeView;
