import * as actionTypes from './actionTypes'

export function storeUpdate(data) {
    return {
        type: actionTypes.STORE_UPDATE,
        data
    }
}

export function add(data) {
    return {
        type: actionTypes.STORE_ADD,
        data
    }
}

export function remove(data) {
    return {
        type: actionTypes.STORE_RM,
        data
    }
}