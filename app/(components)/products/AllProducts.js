"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import EachProducts from "./EachProducts";
export default function AllProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    }
    getData();
  }, []);
  return (
    <div>
      {products.length ? (
        <EachProducts data={products} />
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
}
