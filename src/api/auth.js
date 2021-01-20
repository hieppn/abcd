import http from './http';
import { userForgotPassword } from '../redux/LoginRedux/reducer';

export async function userRegisterApi(data) {
  return http.post('/auth/register', data);
}

export async function userLoginApi(data) {
  return http.post('/auth/login', data);
}
export async function userChangePasswordApi(data){
  return http.put('/users/me/changePassword',data);
}

export async function userGetInformationApi(){
  return http.get('/users/me');
}