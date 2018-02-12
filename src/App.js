import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './App.css';

import * as rest_client from './components/util/rest_client';
import * as trinkets from './components/util/trinkets';

import * as myValuesActions from './actions/myValues';

import AlbumList from './components/AlbumList/AlbumList';
import AlbumDiv from './components/AlbumDiv/AlbumDiv';
import PlaybackSection from './components/PlaybackSection/PlaybackSection';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            albumsToShow: '0'
        };
    }

    searchAlbum(searchTerm) {
        //console.log(searchTerm);
        let researchAlbums = [];

        const allAlbums = this.props.myValues.albums;

        for (let i = 0; i < allAlbums.length; i++) {
            if (trinkets.stringHasWords(allAlbums[i].title, searchTerm.split(' '))) {
                researchAlbums.push(allAlbums[i]);
            }
        }

        //console.log('found ' + researchAlbums.length);
        if (researchAlbums.length !== 1) {
            this.props.actions.researchAlbums(researchAlbums);
        }
        else {
            this.props.actions.checkAlbum(researchAlbums[0]);
        }


    }

    setNumberOfRows(newNumber) {
        this.props.actions.numberOfRows(newNumber);
    }

    setAlbumsPerRow(newNumber) {
        this.props.actions.albumsPerRow(newNumber);
    }

    componentDidMount() {
        rest_client.getAlbums((response) => {
            if (response !== false) {
                this.props.actions.setAlbums(response);
                this.props.actions.setFilteredAlbums(trinkets.albumFilter(response));
            }
        })
    }

    mainDiv() {
        if (this.props.myValues.filteredAlbums.cleanGems !== undefined) {
            return this.props.myValues.checkingAlbum === true ?
                <div>
                    <AlbumDiv/>,
                    <PlaybackSection/>
                </div>
                :
                <AlbumList albumsToShow={this.state.albumsToShow}/>
        }
        else {
            return <h4>Buffering...</h4>
        }


    }

    render() {
        return (
            <div className="App">
                <header>
                    <h1 className="App-title">Normal Yumman Crates</h1>
                </header>
                <p className="App-intro">
                    <button className="btn draw-border" onClick={() => {
                        this.setState({albumsToShow: '0'});
                        this.props.actions.setSearching(false);
                        this.props.actions.setCheckingAlbum(false);
                    }}>Approved
                    </button>
                    <button className="btn draw-border" onClick={() => {
                        this.setState({albumsToShow: '1'});
                        this.props.actions.setSearching(false);
                        this.props.actions.setCheckingAlbum(false);
                    }}>Failures
                    </button>
                    <button className="btn draw-border" onClick={() => {
                        this.setState({albumsToShow: '2'});
                        this.props.actions.setSearching(false);
                        this.props.actions.setCheckingAlbum(false);
                    }}>Sampled
                    </button>
                    <button className="btn draw-border" onClick={() => {
                        this.setState({albumsToShow: '3'});
                        this.props.actions.setSearching(false);
                        this.props.actions.setCheckingAlbum(false);
                    }}>Dirty Gems
                    </button>
                    <button className="btn draw-border" onClick={() => {
                        this.setState({albumsToShow: '4'});
                        this.props.actions.setSearching(false);
                        this.props.actions.setCheckingAlbum(false);
                    }}>Clean Gems
                    </button>
                </p>

                <div>
                    <input placeholder="search album..." onChange={(event) => {
                        this.searchAlbum(event.target.value)
                    }}/>
                </div>

                <br/>

                {
                    this.mainDiv()
                }

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
