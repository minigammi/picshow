import React, { Component } from 'react'
import PicPreview from './PicPreview'

const PicsArea = ({ pics, onPreviewClickHandler }) => (
    <div className="area">
        {pics.map((pic) => (
            <PicPreview
                key={pic.index}
                index={pic.index}
                title={pic.title}
                source={pic.img.preview.href}
                onClick={onPreviewClickHandler}
            />
        ))}
    </div>
)

export default PicsArea
