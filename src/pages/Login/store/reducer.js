import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  login: true,
  loginBtnLoadingStatus: false,
  errorTipsMessage: '',
  devUserName:'admin',
  devPassWord:'111'
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_LOGIN:
			return state.set('login', action.value);
		case constants.LOGOUT:
			return state.set('login', action.value);
		case constants.CHANGE_LOADING_STATUS:
			return state.set('loginBtnLoadingStatus', action.value);
		case constants.CHANGE_ERROR_TIPS_MESSAGE:
			return state.set('errorTipsMessage', action.value);
		default:
			return state;
	}
}