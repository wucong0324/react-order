import * as actionTypes from './actionTypes'

//初始化城市地址
export function initialCity(cityName) {
    return {
        type: actionTypes.USER_CURRENTCITY,
        cityName
    }
}

//更新城市地址
export function updateCity(cityName) {
    return {
        type: actionTypes.USER_CURRENTCITY,
        cityName
    }
}

//更新用户登陆信息
export function updateUser(username) {
    return {
        type: actionTypes.USER_LOGININFO,
        username
    }
}
