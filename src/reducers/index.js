// import { combineReducers } from 'redux'
import {
    GET_PICS_REQUEST,
    GET_PICS_SUCCESS,
    SELECT_PIC,
    CLOSE_VIEWER,
    SHOW_NEXT_PIC,
} from '../actions'

const pics = (state = {
    isFetching: false,
    pics: [],
    isEnabled: false,
    currentPicId: -1
}, action) => {
    switch (action.type) {
    case GET_PICS_REQUEST:
        return {
            ...state,
            isFetching: true,
        }
    case GET_PICS_SUCCESS:
        return {
            ...state,
            isFetching: false,
            pics: action.pics,
        }
    case SELECT_PIC:
        return {
            ...state,
            isEnabled: true,
            currentPicId: action.id,
        }
    case CLOSE_VIEWER:
        return {
            ...state,
            isEnabled: false,
        }
    case SHOW_NEXT_PIC:
        return {
                ...state,
                currentPicId: getNextPic(state.pics, action.id, action.toLeft),
            }
    default:
        return state
    }
}

function getNextPic(pics, id, toLeft) {
    let nextId = toLeft ? id - 1 : id + 1
    if (nextId == pics.length) return 0
    if (nextId < 0) return pics.length - 1
    return nextId
}

export default pics
