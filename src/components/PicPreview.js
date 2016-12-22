import React, { Component } from 'react'

class PicPreview extends Component {
    render() {
        const { title, source, id, onClick } = this.props
        return (
            <div className="preview__wrapper" onClick={() => onClick(id)}>
                <img className="preview__image" src={source} alt={title} title={title}/>
            </div>
        )
    }
}

export default PicPreview
