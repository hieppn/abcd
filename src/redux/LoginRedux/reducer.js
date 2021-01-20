import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { LoginTypes } from '../LoginRedux/actions';

export const INITIAL_STATE = Immutable({
  loadingLogin: false,
  errorLogin: null,
  errorSignup: null,
  errorChangePassword: null,
  loginResponse: null,
  errorGetInformation: null,
  token: null,
  loginType: '',
});
//LOGIN
export const userLogin = (state, { response }) =>
  state.merge({ loadingLogin: true, errorLogin: null });

export const userLoginSuccess = (state, { response }) =>
  state.merge({
    loadingLogin: false,
    loginResponse: response.data,
    token: response.token,
    loginType: 'email',
  });
export const userLoginFailure = (state, { error }) =>
  state.merge({ loadingLogin: false, errorLogin: error });
export const userForgotPassword= (state,{response})=>
  state.merge({loadingLogin: false, password: response.data.password,token: response.token});
//SIGNUP
  export const userSignup = (state, { response }) =>
  state.merge({ loadingLogin: true, errorSignup: null });

export const userSignupSuccess = (state, { response }) =>
  state.merge({
    loadingLogin: false,
    token: response.token,
  });
export const userSignupFailure = (state, { error }) =>
  state.merge({ loadingLogin: false, errorSign: error });
// LOGOUT
export const userLogout = (state) => state.merge({ token: null });

// Change password
export const userChangePassword= (state,{response})=>
  state.merge({loadingLogin: true,errorChangePassword:null});
  export const userChangePasswordSuccess= (state,{response})=>
  state.merge({loadingLogin: false,token:response.token});
  export const userChangePasswordFailure= (state,{error})=>
  state.merge({loadingLogin: false,errorChangePassword:error});
// GET information
export const userGetInformation= (state,{response})=>
  state.merge({loadingLogin: true,errorGetInformation:null});
  export const userGetInformationSuccess= (state,{response})=>
  state.merge({loadingLogin: false,token:response.token});
  export const userGetInformationFailure= (state,{error})=>
  state.merge({loadingLogin: false,errorGetInformation:error});

//
const reducer = makeReducerCreator(INITIAL_STATE, {
  [LoginTypes.USER_LOGIN]: userLogin,
  [LoginTypes.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [LoginTypes.USER_LOGIN_FAILURE]: userLoginFailure,
  [LoginTypes.USER_SIGNUP]: userSignup,
  [LoginTypes.USER_SIGNUP_SUCCESS]: userSignupSuccess,
  [LoginTypes.USER_SIGNUP_FAILURE]: userSignupFailure,
  [LoginTypes.USER_LOGOUT]: userLogout,
  [LoginTypes.USER_CHANGE_PASSWORD]: userChangePassword,
  [LoginTypes.USER_CHANGE_PASSWORD_SUCCESS]: userChangePasswordSuccess,
  [LoginTypes.USER_CHANGE_PASSWORD_FAILURE]: userChangePasswordFailure,
  [LoginTypes.USER_GET_INFORMATION]: userGetInformation,
  [LoginTypes.USER_GET_INFORMATION_SUCCESS]: userGetInformationSuccess,
  [LoginTypes.USER_GET_INFORMATION_FAILURE]: userGetInformationFailure,
});

export default reducer;
