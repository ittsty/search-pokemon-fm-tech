import Searchbar from "@/components/Searchbar";

const HomeView = () => {
  return (
    <main className="min-h-screen bg-linear-to-br from-yellow-100 to-sky-200 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Pokémon Search
        </h1>
        <Searchbar />
      </div>
    </main>
  );
};

export default HomeView;
