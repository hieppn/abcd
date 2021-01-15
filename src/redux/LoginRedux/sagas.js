import { put, call, takeLatest } from 'redux-saga/effects';
import LoginActions, { LoginTypes } from './actions';
import { startup } from '../AppRedux/actions';
import { userLoginApi } from '../../api/auth';

export function* userLoginSaga({ data , success, failure }) {
  console.log(data);
  try {
    const response = yield call(userLoginApi, data);
    const newResponse = {
      data: response.data,
      token: response.data.token,
    };
    yield put(LoginActions.userLoginSuccess(newResponse));
    // yield put(startup());
    success && success(newResponse);
  } catch (error) {
    console.log(error);
    failure && failure(error)
    yield put(LoginActions.userLoginFailure(error));
  }
}
export function* userLogoutSaga() {
  yield put(startup());
}
const loginSagas = () => [takeLatest(LoginTypes.USER_LOGIN, userLoginSaga),
  takeLatest(LoginTypes.USER_LOGOUT, userLogoutSaga)];


export default loginSagas();
