export const backendUrl = "http://94.63.5.193:5000";

export const getAlbums = (cb) => {

    fetch(backendUrl + '/listAlbums')
        .then((response) => response.json())
        .then((responseJson) => {
            cb(responseJson);
        })
        .catch((error) => {
            cb(false);
        });

};
