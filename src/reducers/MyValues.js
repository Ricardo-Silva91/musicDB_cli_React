/**
 * Created by rofler on 5/31/17.
 */
export default(state =
               {
                   albums: [],
                   filteredAlbums: {},
                   searching: false,
                   researchAlbums: [],
                   checkingAlbum: false,
                   albumToCheck: {},
                   numberOfRows: 3,
                   albumsPerRow: 3,
                   searchTerm: ''
               },
               payload) => {
    switch (payload.type) {
        case 'setAlbums':
            state.albums = payload.albums;
            return {...state};
        case 'setFilteredAlbums':
            state.filteredAlbums = payload.filteredAlbums;
            return {...state};
        case 'researchAlbums':
            state.searching = true;
            state.checkingAlbum = false;
            state.researchAlbums = payload.researchAlbums;
            return {...state};
        case 'setSearching':
            state.searching = payload.searching;
            return {...state};
        case 'checkAlbum':
            state.checkingAlbum = true;
            state.albumToCheck = payload.albumToCheck;
            return {...state};
        case 'setCheckingAlbum':
            state.checkingAlbum = payload.checkingAlbum;
            return {...state};
        case 'numberOfRows':
            state.numberOfRows = payload.numberOfRows;
            return {...state};
        case 'albumsPerRow':
            state.albumsPerRow = payload.albumsPerRow;
            return {...state};
        case 'playbackSearch':
            //console.log('playback search')
            state.searchTerm = payload.searchTerm;
            //console.log(state.searchTerm);
            return {...state};
        case 'setPlaybackVideo':
            //console.log('playback search')
            state.videoUrl = payload.videoUrl;
            //console.log(state.searchTerm);
            return {...state};
        default:
            return state;
    }
};