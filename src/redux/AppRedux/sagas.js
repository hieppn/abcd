import { takeLatest, select } from 'redux-saga/effects';
import { AppTypes } from '../AppRedux/actions';
import http from '../../api/http';
import { NavigationUtils } from '../../navigation';

export function* startupSaga() {
  try {
    // call api
    // set data to reducer


    const { token } = yield select((state) => state.login);
    http.setAuthorizationHeader(token);
    if (token) {
      NavigationUtils.startMainContent();
    } else {
      NavigationUtils.startLoginContent();
    }
  } catch (error) {
    NavigationUtils.startLoginContent();
  }
}

const appSagas = () => {
  return [takeLatest(AppTypes.STARTUP, startupSaga)];
};

export default appSagas();
