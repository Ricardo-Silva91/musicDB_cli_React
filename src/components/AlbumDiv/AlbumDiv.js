import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import '../../App.css';

import * as myValuesActions from '../../actions/myValues';
import * as rest_client from '../../components/util/rest_client';

class AlbumDiv extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    getRelevantTracks(album) {
        let result= [];
        for(let i=0; i<album.tracks.length; i++) {
            result.push(
                <h4 onClick={() => {
                    this.props.actions.playbackSearch(album.artist + ' ' + album.tracks[i].title);
                }} key={i}>{album.tracks[i].title} ({album.tracks[i].number})</h4>
            )
        }
        return result.length !== 0 ? result:<h4>nothing...</h4>;
    }

    render() {

        const currentAlbum = this.props.myValues.albumToCheck;

        return (
            <div>
                <div className="row">
                    <div className="col-sm-6">
                        <img onClick={()=>{this.props.actions.playbackSearch(currentAlbum.artist + ' ' + currentAlbum.title)}} className="albumBigPic" alt="" src={rest_client.backendUrl + "/getPicture?pic_name=" + currentAlbum.pic_name}/>
                    </div>
                    <div className="col-sm-6">
                        <h1>{currentAlbum.title}</h1>
                        <h2>by {currentAlbum.artist}</h2>
                        <h4>added {currentAlbum.date_included}</h4>
                        <br/>
                        <h3>genre: {currentAlbum.genre !== '' ? currentAlbum.genre : 'not defined'}</h3>
                        <h3>comment: {currentAlbum.comment !== '' ? currentAlbum.comment : 'none'}</h3>
                        <br/>
                        <h2>Relevant Tracks</h2>
                        <div>
                            {this.getRelevantTracks(currentAlbum)}
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDiv);
