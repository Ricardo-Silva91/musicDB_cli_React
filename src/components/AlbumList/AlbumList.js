import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import '../../App.css';
import './AlbumList.css';

import * as myValuesActions from '../../actions/myValues';
import * as rest_client from '../../components/util/rest_client';

import * as trinkets from '../util/trinkets';

class AlbumList extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    getAlbumsToShow() {

        let result = [];

        switch (this.props.albumsToShow) {
            case '0':
                result = this.props.myValues.filteredAlbums.approved;
                break;
            case '1':
                result = this.props.myValues.filteredAlbums.notApproved;
                break;
            case '2':
                result = this.props.myValues.filteredAlbums.sampled;
                break;
            case '3':
                result = this.props.myValues.filteredAlbums.dirtyGems;
                break;
            case '4':
                result = this.props.myValues.filteredAlbums.cleanGems;
                break;
            default:
                break;
        }
        return result;
    }

    checkAlbum(album) {
        console.log('checking ' + album.title + ' by ' + album.artist);
        this.props.actions.playbackSearch(album.artist + ' ' + album.title);
        this.props.actions.checkAlbum(album);
    }

    getAlbumList() {

        let result = [];
        let selectedAlbums = [];
        const albumsPerRow = 3;
        let numberOfAlbums = this.props.myValues.numberOfRows * 3;

        if (this.props.myValues.searching === false) {

            const albumsToShow = this.getAlbumsToShow();
            const indexes = trinkets.hexRandomDigits(numberOfAlbums, albumsToShow.length - 1);


            //console.log('\n\nrandom albums\nindexes: ' + indexes);
            //console.log('number of rows: ' + numberOfRows);

            for (let i = 0; i < indexes.length; i++) {
                //console.log('bum: ' + indexes[i] + ' tit: ' + albumsToShow[indexes[i]].title);
                selectedAlbums.push(
                    <div className="col-sm-4 albumBox" key={albumsToShow[indexes[i]].id} onClick={() => {
                        this.checkAlbum(albumsToShow[indexes[i]]);
                    }}>
                        <img className={"vinyl vinyl-" + (Math.floor(Math.random() * 3) + 1)} id="picture"
                             src={rest_client.backendUrl + "/getPicture?pic_name=" + albumsToShow[indexes[i]].pic_name}
                             alt="" key={albumsToShow[i].id}/>
                        <div className="albumInfo">
                            <h2 className="albumInfoText">{albumsToShow[indexes[i]].title}</h2>
                            <label>{albumsToShow[indexes[i]].artist}</label>
                        </div>
                    </div>
                );
            }

        }
        else {
            const researchAlbums = this.props.myValues.researchAlbums;
            if (researchAlbums !== undefined) {

                for (let i = 0; i < researchAlbums.length; i++) {
                    //console.log('bum: ' + indexes[i] + ' tit: ' + albumsToShow[indexes[i]].title);
                    selectedAlbums.push(
                        <div className="col-sm-4 albumBox" key={researchAlbums[i].id} onClick={() => {
                            this.checkAlbum(researchAlbums[i]);
                        }}>
                            <img className={"vinyl vinyl-" + (Math.floor(Math.random() * 3) + 1)} id="picture"
                                 src={rest_client.backendUrl + "/getPicture?pic_name=" + researchAlbums[i].pic_name}
                                 alt="" key={researchAlbums[i].id}/>
                            <div className="albumInfo">
                                <h2 className="albumInfoText">{researchAlbums[i].title}</h2>
                                <label>{researchAlbums[i].artist}</label>
                            </div>
                        </div>
                    );
                }

                numberOfAlbums = selectedAlbums.length;
            }
            else {
                selectedAlbums = [];
            }
        }

        const numberOfRows = this.props.myValues.numberOfRows;//(numberOfAlbums / albumsPerRow) < 4 ? (numberOfAlbums / albumsPerRow) : 3;
        //console.log(numberOfRows);

        if (selectedAlbums.length !== 0) {
            for (let i = 0; i < numberOfRows; i++) {
                result.push(
                    <div key={'row' + i} className="row">
                        {selectedAlbums.slice(i * albumsPerRow, i * albumsPerRow + albumsPerRow)}
                    </div>
                );
            }
        }
        else {
            result = <div><h1>No Albums Found...</h1></div>
        }

        return result;
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <div className="crateBox">
                    {this.getAlbumList()}
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

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
