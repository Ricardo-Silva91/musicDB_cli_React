import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Collapse} from 'react-collapse';

import YTSearch from 'youtube-api-search';

import yt_logo from '../img/yt_logo.png';

import * as myValuesActions from '../../actions/myValues';

const API_KEY = 'AIzaSyBYf1d1OI9RrbBZ8ox-HppCUqyndH8herc';

class PlaybackSection extends Component {

    constructor(props) {

        super(props);

        this.state = {
            open: false,
            videos: []
        };
    }

    componentDidMount() {

        console.log(this.props.myValues.searchTerm);

        this.videoSearch(this.props.myValues.searchTerm);
    }

    videoSearch(searchTerm) {
        //youtube search
        YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
            this.setState({
                videos: videos
            });
        });
    }

    makeVideoList () {

        if(this.state.videos !== undefined && this.state.videos.length >0){
            return (
                <div>
                    <iframe title="abc" width="854" height="480" src={'https://www.youtube.com/embed/' + this.state.videos[0].id.videoId} frameBorder="0" allowFullScreen/>
                </div>
            )
        }

    }

    render() {

        //console.log(this.state.videos);

        return (
            <div>
                <img className="playbackLogo" src={yt_logo} alt="yt_logo" onClick={() => {
                    this.setState({open: !this.state.open})
                }}/>
                <Collapse isOpened={this.state.open}>
                    <div>
                        <h1>
                            {this.makeVideoList()}
                        </h1>
                    </div>
                </Collapse>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        myValues: state.myValues
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(myValuesActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaybackSection);
