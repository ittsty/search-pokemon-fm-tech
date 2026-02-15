"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Searchbar = () => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    router.push(value ? `/?name=${value}` : "/");
  };

  useEffect(() => {
    const name = searchParams.get("name") ?? "";
    setValue(name);
  }, [searchParams]);

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <input
        className="
          w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-800 outline-none transition-all duration-200 focus:bg-white focus:border-blue-600 focus:shadow-sm"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search Pokémon (e.g. Pikachu)"
      />
    </form>
  );
};

export default Searchbar;
