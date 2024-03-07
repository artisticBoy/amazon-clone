import Link from "next/link";

export default function EachProducts({ data }) {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mobile:grid-cols-1">
      {data.map((product) => (
        <>
          <Link href={`/products/${product.id}`}>
            <div className="border-4 border-solid border-black">
              <img src={product.image} width={50} height={50} alt="image" />
              <p>{product.description.slice(0, 90)}</p>
              <p>{product.title}</p>
              <p>{product.price}</p>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
}
