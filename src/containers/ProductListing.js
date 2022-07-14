import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useEffect } from "react";
import { setProducts } from "../redux/actions/productActions";
const ProductListing = () => {
  const products = useSelector((state) => state);

  const dispatch = useDispatch();

  const fecthProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error", err);
      });

    dispatch(setProducts(response.data));
    console.log(products);
  };
  useEffect(() => {
    fecthProducts();
  }, []);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};
export default ProductListing;
