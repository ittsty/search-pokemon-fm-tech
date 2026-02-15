import HomeView from "@/views/HomeView";
import { Suspense } from "react";
export default function Home() {
  return (
    <Suspense fallback={<p>Loading search...</p>}>
      <HomeView />;
    </Suspense>
  );
}
