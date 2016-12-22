export const GET_PICS_REQUEST = 'GET_PICS_REQUEST'
export const GET_PICS_SUCCESS = 'GET_PICS_SUCCESS'

export const CLOSE_VIEWER = 'CLOSE_VIEWER'
export const SELECT_PIC = 'SELECT_PIC'
export const SHOW_NEXT_PIC = 'SHOW_NEXT_PIC'

const pathToApi = '/pics'

const parseResponse = (json) => {
    return json.entries.map((item, index) => ({
        title: item.title,
        index: index,
        author: item.author,
        img: {
            preview: item.img.S,
            large: item.img.XL,
        },
    }))
}

const requestPics = () => ({
    type: GET_PICS_REQUEST
})

const receivePics = (json) => ({
    type: GET_PICS_SUCCESS,
    pics: parseResponse(json),
})

export const fetchPics = () => dispatch => {
    dispatch(requestPics())
    return fetch(pathToApi)
        .then(response => response.json())
        .then(json => dispatch(receivePics(json)))
}

export const onPreviewClickHandler = (index) => ({
    type: SELECT_PIC,
    index,
})

export const closeViewer = () => ({
    type: CLOSE_VIEWER,
})

export const onNextHandler = (index, toLeft = false) => ({
    type: SHOW_NEXT_PIC,
    index,
    toLeft,
})

