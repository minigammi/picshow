import React, { Component } from 'react'

const PicPreview = ({ title, source, index, onClick }) => (
    <div className="preview__wrapper" onClick={() => onClick(index)}>
        <img className="preview__image" src={source} alt={title} title={title}/>
    </div>
)

PicPreview.propTypes = {
    title: React.PropTypes.string,
    source: React.PropTypes.string,
    index: React.PropTypes.number,
    onClick: React.PropTypes.func,
}

export default PicPreview
