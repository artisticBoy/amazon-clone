import Semibar from "./(components)/Semibar";
import Slider from "./(components)/Slider";
import AllProducts from "./(components)/products/AllProducts";

export default function Home() {
  return (
    <div>
      <Semibar />
      <Slider />
      <AllProducts />
    </div>
  );
}
