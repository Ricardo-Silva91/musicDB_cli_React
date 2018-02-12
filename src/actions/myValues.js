/**
 * Created by rofler on 5/31/17.
 */
export const setAlbums = (albums) => {
    return {
        type: 'setAlbums',
        albums: albums
    };
};
export const setFilteredAlbums = (filteredAlbums) => {
    return {
        type: 'setFilteredAlbums',
        filteredAlbums: filteredAlbums
    };
};
export const researchAlbums = (researchAlbums) => {
    return {
        type: 'researchAlbums',
        researchAlbums: researchAlbums
    };
};
export const setSearching = (searching) => {
    return {
        type: 'setSearching',
        searching: searching
    };
};
export const checkAlbum = (albumToCheck) => {
    return {
        type: 'checkAlbum',
        albumToCheck: albumToCheck
    };
};
export const setCheckingAlbum = (checkingAlbum) => {
    return {
        type: 'setCheckingAlbum',
        checkingAlbum: checkingAlbum
    };
};
export const numberOfRows = (numberOfRows) => {
    return {
        type: 'numberOfRows',
        numberOfRows: numberOfRows
    };
};
export const albumsPerRow = (albumsPerRow) => {
    return {
        type: 'albumsPerRow',
        albumsPerRow: albumsPerRow
    };
};
export const playbackSearch = (searchTerm) => {
    return {
        type: 'playbackSearch',
        searchTerm: searchTerm
    };
};
export const setPlaybackVideo = (videoUrl) => {
    return {
        type: 'setPlaybackVideo',
        videoUrl: videoUrl
    };
};