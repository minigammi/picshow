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
    viewerEnabled: false,
    viewerCurrentIndex: -1
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
            viewerEnabled: true,
            viewerCurrentIndex: action.index,
        }
    case CLOSE_VIEWER:
        return {
            ...state,
            viewerEnabled: false,
        }
    case SHOW_NEXT_PIC:
        return {
            ...state,
            viewerCurrentIndex: getNextPic(state.pics, action.index, action.toLeft),
        }
    default:
        return state
    }

}

function getNextPic(pics, index, toLeft) {
    let nextIndex = toLeft ? index - 1 : index + 1
    if (nextIndex == pics.length) return 0
    if (nextIndex < 0) return pics.length - 1
    return nextIndex
}

export default pics
