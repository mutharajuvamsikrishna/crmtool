// api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:1279';

const Api = axios.create({
  baseURL: API_BASE_URL,
});


export const getProfessional = (id) => {
  return Api.get(`/viewprofessional?id=${id}`)
}

export const getProfiles = (email) => {
  return Api.get(`/reg?email=${email}`)
}
export const geAdminProfiles = (email) => {
  return Api.get(`/adminreg?email=${email}`)
}
export const getViewAddmore = (email) => {
  return Api.get(`/viewaddmore?email=${email}`)
}
export const getAdminView = () => {
  return Api.get(`/req`)
}
export const getUserView = () => {
  return Api.get(`/req`)
}

export const postAdminChangeOtp = (otp) => {
  return Api.post(`/adminotp5?otp=${otp}`)
}
export const postUserChangeOtp = (otp) => {
  return Api.post(`/otp5?otp=${otp}`)
}
export const postApplicationDetails = (formdata) => {
  return Api.post("/prosave",formdata)
}
export const postAdminForgetPassword = (data) => {
  return Api.post("/adminchangepassword",data)
}
export const postAdminLogin = (data) => {
  return Api.post("/adminloginform",data)
}

export const postUserLogin = (data) => {
  return Api.post("/loginform",data)
}
export const postAdminOtp = (otp) => {
  return Api.post(`/adminotp1?otp=${otp}`)
}
export const postUserOtp = (otp) => {
  return Api.post(`/otp1?otp=${otp}`)
}
export const putAdminPasswordChange = (data) => {
  return Api.put("/adminchangepassword1",data)
}
export const postAdminRegister = (data) => {
  return Api.post("/adminsave",data)
}
export const postUserAddmore = (data1) => {
  return Api.post("/addmore",data1)
}

export const postUserForgetPassword = (data) => {
  return Api.post("/changepassword",data)
}
export const postChangeUserPasswordByEmail = (data) => {
  return Api.put("/changepassword1",data)
}
export const deleteUserById = (id) => {
  return Api.delete(`delete?id=${id}`)
}
export const getSearchQuery = (searchQuery) => {
  return Api.get(`/search?query=${searchQuery}`)
}
export const AdminRegister = (data) => {
  return Api.post("/adminregister",data)
}
export const UserRegister = (data) => {
  return Api.post("/register",data)
}
export const UserRegisterSuccess = (data) => {
  return Api.post("/save",data)
}
export const putUserEditDetailsUpdate = (formdata) => {
  return Api.put("/usereditupdate",formdata)
}