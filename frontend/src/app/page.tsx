"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [product, setProduct] = useState<any>({});
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const res = await fetch("http://localhost:3001/products");
    const products = await res.json();
    setProducts(products);
  }

  async function createProducts() {
    await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    setProduct({});
    await getProducts();
  }

  async function updateProducts(id: number) {
    await fetch(`http://localhost:3001/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    setProduct({});
    await getProducts();
  }

  async function removeProducts(id: number) {
    await fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE",
    });
    await getProducts();
  }

  async function getProductById(id: number) {
    const res = await fetch(`http://localhost:3001/products/${id}`);
    const product = await res.json();
    setProduct(product);
  }

  function formRender() {
    return (
      <div className="flex gap-5 items-end ">
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={product.name ?? ""}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            className="bg-zinc-700 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">description</label>
          <input
            id="description"
            type="text"
            value={product.description ?? ""}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
            className="bg-zinc-700 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price">price</label>
          <input
            id="price"
            type="number"
            value={product.price ?? ""}
            onChange={(e) =>
              setProduct({ ...product, price: Number(e.target.value) })
            }
            className="bg-zinc-700 p-2 rounded-md"
          />
        </div>
        <div>
          {product.id ? (
            <button
              onClick={() => updateProducts(product.id)}
              className="bg-blue-500 px-4 py-2 rounded-md"
            >
              Update product
            </button>
          ) : (
            <button
              onClick={createProducts}
              className="bg-blue-500 px-4 py-2 rounded-md"
            >
              Create product
            </button>
          )}
        </div>
      </div>
    );
  }

  function productsRender() {
    return (
      <div className="flex flex-col gap-2">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="flex items-center gap-2 bg-zinc-800 py-2 px-4 rounded-md"
          >
            <div className="flex-1">{product.name}</div>
            <div>{product.description}</div>
            <div>{product.price}</div>
            <div className="flex gap-2">
              <button
                onClick={() => getProductById(product.id)}
                className="bg-blue-500 p-2 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => removeProducts(product.id)}
                className="bg-red-500 p-2 rounded-md"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-10">
      {formRender()}
      {productsRender()}
    </div>
  );
}
