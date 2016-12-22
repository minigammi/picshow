import React, { Component } from 'react'

class Viewer extends Component {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        if (this.props.isEnabled) {
            document.addEventListener('keydown', this.handleClick)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.isEnabled && nextProps.isEnabled) {
            window.addEventListener('keydown', this.handleClick);
        }
        if (!nextProps.isEnabled) {
            window.removeEventListener('keydown', this.handleClick);
        }
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleClick)
    }

    handleClick(event) {
        const { showNext, closeViewer, pic } = this.props
        switch (event.keyCode) {
            case 27:
                closeViewer()
                break
            case 37:
                showNext(pic.id, true)
                break
            case 39:
                showNext(pic.id, false)
                break
        }
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    render() {
        const { isEnabled, pic, closeViewer, showNext } = this.props
        if (!isEnabled) return null

        const maxHeight = (document.documentElement.clientHeight - 90) || 100

        return (
            <div className="viewer">
                <span className="viewer__shim"></span>
                <div className="viewer__content">
                    <div><img style={{maxHeight}} className="viewer__content__image" src={pic.img.large.href} title={pic.title} alt={pic.title}/></div>
                    <div className="viewer__content__caption">
                        <p className="viewer__content__caption__text">Title: {pic.title}</p>
                        <p className="viewer__content__caption__text">Author: {pic.author}</p>
                    </div>
                </div>
                <button className="viewer__control viewer__control_close" title="Close" onClick={() => closeViewer()}>&times;</button>
                <button className="viewer__control viewer__control_aside viewer__control_aside_left" title="Previous" onClick={() => showNext(pic.id, true)}>❮</button>
                <button className="viewer__control viewer__control_aside viewer__control_aside_right" title="Next" onClick={() => showNext(pic.id, false)}>❯</button>
            </div>
        )
    }

}

export default Viewer
