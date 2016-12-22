import React, { Component } from 'react'

class Viewer extends Component {

    // Lifecycle

    constructor(props) {
        super(props)

        this.handleKeyEvent = this.handleKeyEvent.bind(this)
        this.showNext = this.showNext.bind(this)
        this.showPrev = this.showPrev.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.isEnabled && nextProps.isEnabled) {
            window.addEventListener('keydown', this.handleKeyEvent);
        }
        if (!nextProps.isEnabled) {
            window.removeEventListener('keydown', this.handleKeyEvent);
        }
    }

    // Methods

    handleKeyEvent(event) {
        switch (event.keyCode) {
            case 27:
                this.props.close()
                break
            case 37:
                this.showPrev()
                break
            case 39:
                this.showNext()
                break
        }
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    showNext() {
        this.props.next(this.props.pic.index, false)
    }

    showPrev() {
        this.props.next(this.props.pic.index, true)
    }

    // Render

    render() {
        const { isEnabled, pic, close } = this.props
        const maxHeight = (document.documentElement.clientHeight - 90) || 100

        if (!isEnabled || !pic) return null

        return (
            <div className="viewer">
                <span className="viewer__shim"></span>
                <div className="viewer__content">
                    <div>
                        <img style={{maxHeight}}
                             className="viewer__content__image"
                             src={pic.img.large.href}
                             title={pic.title}
                             alt={pic.title}/>
                    </div>
                    <div className="viewer__content__caption">
                        <p className="viewer__content__caption__text">Title: {pic.title}</p>
                        <p className="viewer__content__caption__text">Author: {pic.author}</p>
                    </div>
                </div>
                <button className="viewer__control viewer__control_close"
                        title="Close"
                        onClick={close}>
                    &times;
                </button>
                <button className="viewer__control viewer__control_aside viewer__control_aside_left"
                        title="Previous"
                        onClick={this.showPrev}>
                    &#10094;
                </button>
                <button className="viewer__control viewer__control_aside viewer__control_aside_right"
                        title="Next"
                        onClick={this.showNext}>
                    &#10095;
                </button>
            </div>
        )
    }

}

export default Viewer
