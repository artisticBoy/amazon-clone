"use client";
import { useDispatch } from "react-redux";
import { increment } from "@/app/(GlobalRedux)/features/cartSlice";

async function getProduct(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
  } catch {
    alert("Fetch failed");
  }
}

export default async function Page({ params }) {
  const dispatch = useDispatch();
  const addToBasket = () => {
    dispatch(increment(params.slug, product));
  };
  const product = await getProduct(params.slug);
  return (
    <div>
      {product ? (
        <div className="flex lg:flex-row gap-7 items-center mx-[20%] my-[6%] mobile:flex-col">
          <img
            src={product.image}
            width={300}
            height={500}
            alt="image"
            className="rounded-lg lg:w-[300px] lg:h-[300px] bg-slate-300 p-4 mobile:w-full"
          />
          <div>
            <h1 className="font-bold text-3xl mb-2">{product.title}</h1>
            <p className="mb-2">{product.description}</p>
            <p className="mb-2 text-lg">
              Price: <span className="font-bold">${product.price}</span>
            </p>
            <button
              onClick={addToBasket}
              className="smallBtn hover:bg-[#d69e55]"
            >
              Add to cart
            </button>
          </div>
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
}
