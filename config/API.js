import axios from "axios";

const BASE_URL = "https://buildoo.co.in/api/"

export const generateGuestId = async (data) => {
  return axios.get(`${BASE_URL}customer/guestID?id=${data}`);
};

export const fetchCrousel = async (data) => {
  if (data === undefined) data = null;
  return await axios.get(`${BASE_URL}customer/crouselList?id=${data}`);
};

// catagory api's

export const fetchCategory = async () => {
  return await axios.get(`${BASE_URL}customer/fetchCategory`);
};

export const fetchCategoryProducts = async (data) => {
  return await axios.get(`${BASE_URL}customer/fetchCategorybyid?id=${data}`);
};

export const getProductList = async (data) => {
  return await axios.get(
    `${BASE_URL}customer/getProductList?id=${data.id}&page=${data.page}&pageSize=10&type=${data.type}`
  );
};
export const getProductDetailsbyID = async (id) => {
  return await axios.get(`${BASE_URL}customer/getProductDetailsbyID?id=${id}`);
};
export const addToCartApi = async (data) => {
  return await axios.post(`${BASE_URL}customer/addToCart`, data);
};
export const fetchCartDetails = async (guestId) => {
  return await axios.get(`${BASE_URL}customer/viewCartList?id=${guestId}`);
};
export const viewCartDetails = async (guestId) => {
  return await axios.get(`${BASE_URL}customer/viewCartList?id=${guestId}`);
};
export const modifyQty = async (data) => {
  return await axios.post(`${BASE_URL}customer/modifyQty`, data);
};
export const loginApi = async (data) => {
  return await axios.post(`${BASE_URL}customer/customerLoginApi`, data);
};
export const customerRegistration = async (data) => {
  return await axios.post(`${BASE_URL}customer/customerRegistration`, data);
};
export const customerForgetPassword = async (data) => {
  return await axios.post(`${BASE_URL}customer/customerForgetPassword`, data);
};
export const verifyOtp = async (data) => {
  return await axios.post(`${BASE_URL}customer/verifyOtp`, data);
};

export const updatePasswordApi = async (data) => {
  return await axios.post(`${BASE_URL}customer/updatePassword`, data);
};
export const customerLoginApi = async (data) => {
  return await axios.post(`${BASE_URL}customer/customerLoginApi`, data);
};
export const addAddress = async (data) => {
  return await axios.post(`${BASE_URL}customer/addAddress`, data);
};
export const stateList = async () => {
  return await axios.get(`${BASE_URL}customer/stateList`);
};
export const cityList = async (id) => {
  return await axios.get(`${BASE_URL}customer/cityList?id=${id}`);
};
export const getAddressList = async (id) => {
  return await axios.get(`${BASE_URL}customer/getAddressList?id=${id}`);
};
export const deleteAddress = async (data) => {
  return await axios.get(
    `${BASE_URL}customer/deleteAddress?customerId=${data.customerId}&addressId=${data.id}`
  );
};
export const getAddressById = async (id) => {
  return await axios.get(`${BASE_URL}customer/getAddressById?id=${id}`);
};

export const makeDefaultAddress = async (data) => {
  return await axios.get(
    `${BASE_URL}customer/defualtAddress?addressId=${data.id}&customerId=${data.customerId}`
  );
};

export const updateStatus = async (data) => {
  const { id, customerId } = data;
  return await axios.get(
    `${BASE_URL}customer/updateStatus?id=${id}&customerId=${customerId}`
  );
};

export const deleteproductfromCart = async (data) => {
  return await axios.post(`${BASE_URL}customer/deleteproductfromCart`, data);
};

export const getFavouriteList = async (data) => {
  return await axios.get(
    `${BASE_URL}customer/favrouiteList?customerid=${data}`
  );
};

export const addtoFavrouite = async (data) => {
  return await axios.post(`${BASE_URL}customer/addtoFavrouite`, data);
};

export const deleteFromFavrouite = async (data) => {
  return await axios.post(`${BASE_URL}customer/deleteFavrouite?id=${data}`);
};

export const getProfileInfo = async (data) => {
  return await axios.get(
    `${BASE_URL}customer/getProfileInfo?customerId=${data}`
  );
};

export const getDefaultAddress = async (data) => {
  return await axios.get(
    `${BASE_URL}customer/defaultAddressget?customerId=${data}`
  );
};

export const makeOrder = async (data) => {
  return await axios.post(`${BASE_URL}customer/completeOrder`, data);
};

export const getOrderListApi = async (data) => {
  return await axios.get(`${BASE_URL}customer/MyOrder?customerId=${data}`);
};

export const getOrderDetailsApi = async (data) => {
  return await axios.get(`${BASE_URL}customer/MyOrderDetails?orderId=${data}`);
};


export const giveRatingApi = async (data) => {
  return await axios.post(`${BASE_URL}customer/addratings`, data);
};


export const updateOrderApi = async (data) => {
  return await axios.post(`${BASE_URL}customer/updateOrder`, data);
};

export const searchSuggetions = async (data) => {
  return await axios.get(`${BASE_URL}customer/searchProductsList?SearchText=${data}`);
};
