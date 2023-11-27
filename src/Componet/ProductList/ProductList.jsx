/* eslint-disable no-undef */

import { useEffect, useState } from "react";
import "./ProductList.css";
import SingaleProduct from "../SingaleProduct/SingaleProduct";
import { getLocalStorage } from "../../utilis";

const ProductList = () => {
  const [products, setProducts] = useState(getLocalStorage());
  const [name, setName] = useState("");
  const [productId, setProductId] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [color, setColor] = useState("'#000000'");
  //form handeling for

  const handelSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: name,
      productId: productId,
      productPrice: productPrice,
      productQuantity: productQuantity,
      productDescription: productDescription,
      color: color,
    };
    setProducts([newProduct, ...products]);
    setName("");
    setProductId("");
    setProductPrice("");
    setProductQuantity("");
    setProductDescription("");
    setColor("");

    console.log(
      name,
      productId,
      productPrice,
      productQuantity,
      productDescription
    );
  };
  //handelDeleteProduct
  const handelDeleteProduct = (productId) => {
    setProducts(products.filter((p) => p.productId !== productId));
  };
  // set localstorage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    setProducts(products);
  }, [products]);

  return (
    <div className="wrapper">
      <form onSubmit={handelSubmit}>
        <input
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          name="name"
          placeholder="Name"
          type="text"
        />
        <input
          required
          onChange={(e) => {
            setProductId(e.target.value);
          }}
          value={productId}
          name="productId"
          placeholder="Product id"
          type="number"
        />
        <input
          required
          onChange={(e) => {
            setProductPrice(e.target.value);
          }}
          value={productPrice}
          name="productPrice"
          placeholder="Product Price"
          type="number"
        />
        <input
          required
          onChange={(e) => {
            setProductQuantity(e.target.value);
          }}
          value={productQuantity}
          name="productQuantity"
          placeholder="product Quantity"
          type="number"
        />
        <textarea
          required
          onChange={(e) => {
            setProductDescription(e.target.value);
          }}
          value={productDescription}
          name="productDescription"
          placeholder="product Description"
          type="text"
        />
        <label>
          Choos your color
          <input
            required
            onChange={(e) => {
              setColor(e.target.value);
            }}
            value={color}
            name="color"
            type="color"
          />
        </label>
        <button
          className="submit-button"
          type="submit"
        >
          Submit
        </button>
      </form>

      <div className="">
        <div className="view-container">
          <>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr className="">
                    <th>Name</th>
                    <th>Id</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>color</th>
                    <th>Description</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                {products.map((product) => {
                  return (
                    <SingaleProduct
                      handelDeleteProduct={handelDeleteProduct}
                      product={product}
                      key={product.productId}
                    />
                  );
                })}
              </table>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
