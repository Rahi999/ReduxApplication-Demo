import {
  getproductfailure,
  getproductrequest,
  getproductsuccess
} from "./actionType";

export const getRequest = () => {
  return { type: getproductrequest };
};
export const getFailure = () => {
  return { type: getproductfailure };
};
export const getSuccess = (payload) => {
  return { type: getproductsuccess, payload };
};
