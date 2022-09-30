import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { getFailure, getRequest, getSuccess } from "../Redux/action";
import {
  getproductfailure,
  getproductrequest,
  getproductsuccess
} from "../Redux/actionType";
import { loadData } from "../utils/accessLocalStorage";

const Products = () => {
  // const prods = loadData("data");
  const [limit, settLimit] = useState(5);
  const [searchParams, setSearchParams] = useSearchParams();
  const { prod, isLoading, isError } = useSelector((state) => {
    return {
      prod: state.AppReducer.prod,
      isLoading: state.AppReducer.isLoading,
      isError: state.AppReducer.isError
    };
  });
  const dispatch = useDispatch();
  const getProducts = () => {
    dispatch(getRequest());
    return axios
      .get(`https://fakestoreapi.com/products?limit=${limit}`)
      .then((res) => {
        dispatch(getSuccess(res.data));
      })
      .catch((err) => dispatch(getFailure()));
  };

  useEffect(() => {
    setSearchParams({
      limit
    });
    getProducts();
  }, [limit]);

  return isLoading ? (
    <div>...Loading</div>
  ) : isError ? (
    <div>...Something gone Wrong</div>
  ) : (
    <>
      <div>
        <h1>Products</h1>{" "}
        <select onChange={(e) => settLimit(e.target.value)}>
          {" "}
          <option>Select Limit</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <div>
          {prod &&
            prod.map((data) => (
              <Link to={`/products/${data.id}`} key={data.id}>
                <div>
                  {data.id} {data.title}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};
export default Products;
