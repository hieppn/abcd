import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const LoginTypes = makeConstantCreator(
  'USER_LOGIN',
  'USER_LOGIN_SUCCESS',
  'USER_LOGIN_FAILURE',
  'USER_LOGOUT',
  'USER_SIGNUP',
  'USER_SIGNUP_SUCCESS',
  'USER_SIGNUP_FAILURE',
  'USER_CHANGE_PASSWORD',
  'USER_CHANGE_PASSWORD_SUCCESS',
  'USER_CHANGE_PASSWORD_FAILURE',
  'USER_GET_INFORMATION',
  'USER_GET_INFORMATION_SUCCESS',
  'USER_GET_INFORMATION_FAILURE',
);
//LOGIN
const userLogin = (data) => makeActionCreator(LoginTypes.USER_LOGIN, { data });
const userLoginSuccess = (response) =>
  makeActionCreator(LoginTypes.USER_LOGIN_SUCCESS, { response });
const userLoginFailure = (error) => makeActionCreator(LoginTypes.USER_LOGIN_FAILURE, { error });
const userChangePassword = (data) => makeActionCreator(LoginTypes.USER_CHANGE_PASSWORD, { data });
const userChangePasswordSuccess = (response) =>
  makeActionCreator(LoginTypes.USER_CHANGE_PASSWORD_SUCCESS, { response });
const userChangePasswordFailure = (error) =>
  makeActionCreator(LoginTypes.USER_CHANGE_PASSWORD_FAILURE, { error });
//SIGNUP
const userSignup = (data) => makeActionCreator(LoginTypes.USER_SIGNUP, { data });
const userSignupSuccess = (response) =>
  makeActionCreator(LoginTypes.USER_SIGNUP_SUCCESS, { response });
const userSignupFailure = (error) => makeActionCreator(LoginTypes.USER_SIGNUP_FAILURE, { error });
// PROFILE
const userGetInformation = (data) => makeActionCreator(LoginTypes.USER_GET_INFORMATION, { data });
const userGetInformationSuccess = (response) =>
  makeActionCreator(LoginTypes.USER_GET_INFORMATION_SUCCESS, { response });
const userGetInformationFailure = (error) => makeActionCreator(LoginTypes.USER_GET_INFORMATION_FAILURE, { error });
// LOGOUT
const userLogout = () => makeActionCreator(LoginTypes.USER_LOGOUT);

export default {
  userLogin,
  userLoginSuccess,
  userLoginFailure,
  userLogout,
  userSignup,
  userSignupSuccess,
  userSignupFailure,
  userChangePasswordFailure,
  userChangePasswordSuccess,
  userChangePassword,
  userGetInformation,
  userGetInformationSuccess,
  userGetInformationFailure,

};
