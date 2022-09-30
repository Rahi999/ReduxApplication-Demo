import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pdetails = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  // console.log(params);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <div>
        <h1>PDetails</h1>

        <img src={data.image} width="100px" alt="ProductsDetail" />
        {data.title}
        <button>Add To Cart</button>
      </div>
    </>
  );
};
export default Pdetails;
