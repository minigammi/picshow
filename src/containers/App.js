import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PicsArea from '../components/PicsArea'
import Viewer from '../components/Viewer'
import { fetchPics, onPreviewClickHandler, closeViewer, onNextHandler } from '../actions'

class App extends Component {

    componentDidMount() {
        this.props.fetchPics()
    }

    render () {
        if (this.props.isFetching) return <h2>Loading...</h2>
        return this.renderContainer()
    }

    renderContainer() {
        const {
            pics,
            viewerEnabled,
            viewerCurrentIndex,
            onPreviewClickHandler,
            closeViewer,
            onNextHandler,
        } = this.props

        let picForViewer = null
        if (pics.length && viewerCurrentIndex != -1) {
            picForViewer = pics[viewerCurrentIndex]
        }

        return (
            <div>
                <PicsArea pics={pics} onPreviewClickHandler={onPreviewClickHandler} />
                <Viewer isEnabled={viewerEnabled} pic={picForViewer} close={closeViewer} next={onNextHandler} />
            </div>
        )
    }

}

const mapStateToProps = state => {
    const {
        isFetching,
        pics,
        viewerEnabled,
        viewerCurrentIndex,
    } = state
    return {
        isFetching,
        pics,
        viewerEnabled,
        viewerCurrentIndex,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPics: bindActionCreators(fetchPics, dispatch),
        onPreviewClickHandler: bindActionCreators(onPreviewClickHandler, dispatch),
        closeViewer: bindActionCreators(closeViewer, dispatch),
        onNextHandler: bindActionCreators(onNextHandler, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
