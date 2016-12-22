import React, { Component } from 'react'
import PicPreview from './PicPreview'

class PicsArea extends Component {
    render() {
        const { isFetching, pics, onPreviewClickHandler } = this.props
        return (
            <div className="area">
                {isFetching ?
                    <h2>Loading...</h2> :
                    pics.map((pic) => (
                        <PicPreview
                            key={pic.id}
                            id={pic.id}
                            title={pic.title}
                            source={pic.img.preview.href}
                            onClick={onPreviewClickHandler}
                        />
                    ))
                }
            </div>
        )
    }
}

export default PicsArea
