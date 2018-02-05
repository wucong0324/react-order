import * as actionTypes from '../actions/actionTypes'


const initialState = {
    page: 0,
    likeList: []
};

export default function userInfo(state = initialState, action) {
    switch (action.type) {
        //用户当前城市
        case actionTypes.USER_CURRENTCITY:
            return {
                ...state,
                cityName: action.cityName
            };
        case actionTypes.USER_LOGININFO:
            return {
                ...state,
                username: action.username
            };
        default:
            return state
    }
}