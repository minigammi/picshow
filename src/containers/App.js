import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PicsArea from '../components/PicsArea'
import Viewer from '../components/Viewer'
import { fetchPics, onPreviewClickHandler, closeViewer, showNextPic } from '../actions'

class App extends Component {

    componentDidMount() {
        this.props.fetchPics()
    }

    render () {
        const {
            isFetching,
            pics,
            isEnabled,
            currentPicId,
            onPreviewClickHandler,
            closeViewer,
            showNextPic,
        } = this.props
        let picForViewer = null
        if (pics.length && currentPicId != -1) {
            picForViewer = pics[currentPicId]
        }
        return (
            <div>
                <PicsArea isFetching={isFetching} pics={pics} onPreviewClickHandler={onPreviewClickHandler} />
                <Viewer isEnabled={isEnabled} pic={picForViewer} closeViewer={closeViewer} showNext={showNextPic} />
            </div>
        )
    }

}

const mapStateToProps = state => {
    const { isFetching, pics } = state
    const { isEnabled, currentPicId } = state
    return {
        isFetching,
        pics,
        isEnabled,
        currentPicId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPics: bindActionCreators(fetchPics, dispatch),
        onPreviewClickHandler: bindActionCreators(onPreviewClickHandler, dispatch),
        closeViewer: bindActionCreators(closeViewer, dispatch),
        showNextPic: bindActionCreators(showNextPic, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
