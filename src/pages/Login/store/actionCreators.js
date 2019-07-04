import * as constants from './constants';
import {getMyExchangeList } from './../API/httpService'

// const changeLogin = () => ({
// 	type: constants.CHANGE_LOGIN,
// 	value: true
// })

export const changeLoadingStatus = (value) => ({
	type: constants.CHANGE_LOADING_STATUS,
	value
})

export const changeErrorTipsMessage = (value) => ({
	type: constants.CHANGE_ERROR_TIPS_MESSAGE,
	value
})

export const login = (accout, password) => {
	return (dispatch) => {
    getMyExchangeList()
	}
}