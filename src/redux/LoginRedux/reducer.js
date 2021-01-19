import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { LoginTypes } from '../LoginRedux/actions';

export const INITIAL_STATE = Immutable({
  loadingLogin: false,
  errorLogin: null,
  errorSignup: null,
  loginResponse: null,
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

//
const reducer = makeReducerCreator(INITIAL_STATE, {
  [LoginTypes.USER_LOGIN]: userLogin,
  [LoginTypes.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [LoginTypes.USER_LOGIN_FAILURE]: userLoginFailure,
  [LoginTypes.USER_SIGNUP]: userSignup,
  [LoginTypes.USER_SIGNUP_SUCCESS]: userSignupSuccess,
  [LoginTypes.USER_SIGNUP_FAILURE]: userSignupFailure,
  [LoginTypes.USER_LOGOUT]: userLogout,
});

export default reducer;
