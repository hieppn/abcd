import { put, call, takeLatest } from 'redux-saga/effects';
import LoginActions, { LoginTypes } from './actions';
import { startup } from '../AppRedux/actions';
import {
    userLoginApi,
    userRegisterApi,
    userChangePasswordApi,
    userGetInformationApi,
} from '../../api/auth';
import { userForgotPassword } from './reducer';

export function* userLoginSaga({ data }) {
  try {
    const response = yield call(userLoginApi, data);
    const newResponse = {
      data: response.data,
      token: response.data.token,
    };
    yield put(LoginActions.userLoginSuccess(newResponse));
    yield put(startup());
  } catch (error) {
    console.log(error);
    yield put(LoginActions.userLoginFailure(error.data.message));
  }
}
export function* userChangePasswordSaga({ data }) {
  try {
    const response = yield call(userChangePasswordApi, data);
    const newResponse = {
      data: response.data,
      token: response.data.token,
    };
   // console.log(data);
    yield put(LoginActions.userChangePasswordSuccess(newResponse));
    yield put(startup());
  } catch (error) {
    console.log(error);
    yield put(LoginActions.userChangePasswordFailure(error.data.message));
  }
}
export function* userSignupSaga({ data }) {
  try {
    const response = yield call(userRegisterApi, data);
    const newResponse = {
      data: response.data,
      token: response.data.token,
    };
    yield put(LoginActions.userSignupSuccess(newResponse));
    yield put(startup());
  } catch (error) {
    console.log(error);
    yield put(LoginActions.userSignupFailure(error.data.message));
  }
}
export function* userGetInformationSaga() {
  try {
    const response = yield call(userGetInformationApi);
    const newResponse = {
      response: response,
    };
    console.log(newResponse);
    yield put(LoginActions.userGetInformationSuccess(newResponse));
  } catch (error) {
    console.log(error);
    yield put(LoginActions.userGetInformationFailure(error.message));
  }
}
export function* userLogoutSaga() {
  yield put(startup());
}
const loginSagas = () => [takeLatest(LoginTypes.USER_LOGIN, userLoginSaga),
  takeLatest(LoginTypes.USER_SIGNUP, userSignupSaga),
  takeLatest(LoginTypes.USER_CHANGE_PASSWORD, userChangePasswordSaga),
  takeLatest(LoginTypes.USER_GET_INFORMATION, userGetInformationSaga),
  takeLatest(LoginTypes.USER_LOGOUT, userLogoutSaga)];


export default loginSagas();
