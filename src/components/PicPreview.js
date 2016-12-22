import React, { Component } from 'react'

const PicPreview = ({ title, source, index, onClick }) => (
    <div className="preview__wrapper" onClick={() => onClick(index)}>
        <img className="preview__image" src={source} alt={title} title={title}/>
    </div>
)

export default PicPreview
