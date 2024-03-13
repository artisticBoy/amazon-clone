import { Suspense } from "react";
import Slider from "./(components)/Slider";
import AllProducts from "./(components)/products/AllProducts";
import Loading from "./loading";

export default function Home() {
  return (
    <main className="bg-[whitesmoke]">
      <Slider />
      <AllProducts />
    </main>
  );
}
