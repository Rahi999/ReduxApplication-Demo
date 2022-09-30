import {
  getproductfailure,
  getproductrequest,
  getproductsuccess
} from "./actionType";

import { loadData, saveData } from "../utils/accessLocalStorage";
const initState = {
  prod: [],
  status: false,
  isLoading: false,
  isError: false
};

export const reducer = (oldState = initState, { type, payload }) => {
  switch (type) {
    case getproductrequest: {
      return {
        ...oldState,
        isLoading: true,
        isError: false
      };
    }
    case getproductfailure: {
      return {
        ...oldState,
        isError: true
      };
    }
    case getproductsuccess: {
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        prod: [...payload]
      };
    }
    default:
      return oldState;
  }
};
