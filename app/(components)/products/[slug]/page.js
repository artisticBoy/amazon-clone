async function getProduct(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
  } catch {
    alert("Fetch failed");
  }
}

export default async function page({ params }) {
  const product = await getProduct(params.slug);
  return (
    <div>
      {product ? (
        <div className="flex gap-7 items-center mx-[20%] my-[6%]">
          <img
            src={product.image}
            width={300}
            height={500}
            alt="image"
            className="rounded-lg"
          />
          <div>
            <h1 className="font-bold text-3xl">{product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button className="smallBtn hover:bg-[#d69e55]">Add to cart</button>
          </div>
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
}
