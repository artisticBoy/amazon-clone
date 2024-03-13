import Link from "next/link";

export default function EachProducts({ data }) {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mobile:grid-cols-1 z-30">
      {data.map((product) => (
        <>
          <Link href={`/products/${product.id}`}>
            <div className="bg-white z-20 mx-1 h-[98%] pt-5 px-7 flex flex-col items-center rounded-lg">
              <div className="h-[50%] mb-6 border-b-2 flex pb-5">
                <img src={product.image} width={150} height={200} alt="image" />
              </div>
              <p className="font-bold text-xl mb-3">
                {product.title.slice(0, 20)}
              </p>
              <p className="font-light text-sm mb-3">
                {product.description.slice(0, 90)}
              </p>
              <p className="font-bold text-lg mb-auto">${product.price}</p>
              <div className="w-full mb-2">
                <button className="bg-[#37475A] hover:bg-[#FEBD69] transition-all ease-in-out delay-75 p-3 w-full rounded-lg">
                  Add to cart
                </button>
              </div>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
}
