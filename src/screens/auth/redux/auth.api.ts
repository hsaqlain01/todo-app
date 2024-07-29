import axiosService from "../../../utilities/http-client";

export const postRegisterRequest = async (data: any) => {
  const response = await axiosService.post(`users/register`, data);
  return response?.data;
};

export const postSignInRequest = async (data: any) => {
  const response = await axiosService.post(`users/login`, data);
  return response?.data;
};
