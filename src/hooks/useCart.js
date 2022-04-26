import { useEffect, useState } from "react";
import { getStoredData } from "../utilities/fakedb";

const useCart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = getStoredData();
    let savedCart = [];
    const keys = Object.keys(storedCart);
    fetch(`https://agile-temple-20322.herokuapp.com/productbykeys`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        for (const id in storedCart) {
          const addedProduct = products.find((product) => product._id === id);
          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);
      });
  }, []);

  return [cart, setCart];
};

export default useCart;
