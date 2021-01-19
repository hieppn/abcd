import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const LoginTypes = makeConstantCreator(
  'USER_LOGIN',
  'USER_LOGIN_SUCCESS',
  'USER_LOGIN_FAILURE',
  'USER_LOGOUT',
  'USER_SIGNUP',
  'USER_SIGNUP_SUCCESS',
  'USER_SIGNUP_FAILURE',
);
//LOGIN
const userLogin = (data) => makeActionCreator(LoginTypes.USER_LOGIN, { data});
const userLoginSuccess = response => makeActionCreator(LoginTypes.USER_LOGIN_SUCCESS, { response });
const userLoginFailure = error => makeActionCreator(LoginTypes.USER_LOGIN_FAILURE, { error });

//SIGNUP
const userSignup = (data) => makeActionCreator(LoginTypes.USER_SIGNUP, { data});
const userSignupSuccess = response => makeActionCreator(LoginTypes.USER_SIGNUP_SUCCESS, { response });
const userSignupFailure = error => makeActionCreator(LoginTypes.USER_SIGNUP_FAILURE, { error });

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
};

