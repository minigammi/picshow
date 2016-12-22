import React, { Component } from 'react'

class PicPreview extends Component {
    render() {
        const { title, source, id, onClick } = this.props
        return (
            <div className="pic-preview-wrapper" onClick={() => onClick(id)}>
                <img src={source} alt={title} title={title}/>
            </div>
        )
    }
}

export default PicPreview
