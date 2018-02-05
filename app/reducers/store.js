import * as actionTypes from '../actions/actionTypes'

const initialStore = [];

export default function store(state = initialStore, action) {
    switch (action.type){
        case actionTypes.STORE_UPDATE:
            return state.concat(action.data);
        case actionTypes.STORE_ADD:
            state.push(action.data);
            return state;
        case actionTypes.STORE_RM:
            return state.filter((item, index) => {
                if(item.id !== action.data.id){
                    return item
                }
            });
        default:
            return state
    }
}