import axios from 'axios'

import { LoginString, RegisterString } from '../actionString'

const url = process.env.REACT_APP_URL

export const postLogin = (data) => {
  return {
    type: LoginString,
    payload: axios.post(url + '/auth/login', data)
  }
}

export const postRegister = (data) => {
  return {
    type: RegisterString,
    payload: axios.post(url + '/auth/signup', data)
  }
}

// export const setLoginTrue = () => {
//   return {
//     type: "Login",
//   };
// };

// export const setLoginFalse = () => {
//   return {
//     type: "Logout",
//   };
// };
