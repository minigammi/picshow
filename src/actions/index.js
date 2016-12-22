export const GET_PICS_REQUEST = 'GET_PICS_REQUEST'
export const GET_PICS_SUCCESS = 'GET_PICS_SUCCESS'
export const SELECT_PIC = 'SELECT_PIC'

export const CLOSE_VIEWER = 'CLOSE_VIEWER'
export const SHOW_NEXT_PIC = 'SHOW_NEXT_PIC'

const parseResponse = (json) => {
    let id = 0
    return json.entries.map((item) => ({
        title: item.title,
        id: id++,
        author: item.author,
        img: {
            preview: item.img.S,
            large: item.img.XL,
        },
    }))
}

export const requestPics = () => ({
    type: GET_PICS_REQUEST
})

export const receivePics = (json) => ({
    type: GET_PICS_SUCCESS,
    pics: parseResponse(json),
})

export const fetchPics = () => dispatch => {
    dispatch(requestPics())
    return fetch('/pics')
        .then(response => response.json())
        .then(json => dispatch(receivePics(json)))
}

export const onPreviewClickHandler = (id) => ({
    type: SELECT_PIC,
    id,
})

export const closeViewer = () => ({
    type: CLOSE_VIEWER,
})

export const showNextPic = (id, toLeft = false) => ({
    type: SHOW_NEXT_PIC,
    id,
    toLeft,
})

