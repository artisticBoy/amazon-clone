import Slider from "./(components)/Slider";
import AllProducts from "./(components)/products/AllProducts";

export default function Home() {
  return (
    <main className="bg-[whitesmoke]">
      <Slider />
      <AllProducts />
    </main>
  );
}
