export const albumFilter = (albums) => {
    let result = {
        approved: [],
        notApproved: [],
        sampled: [],
        cleanGems: [],
        dirtyGems: []
    };

    for (let i = 0; i < albums.length; i++) {
        if (albums[i].genre === 'samples') {
            result.sampled.push(albums[i]);
        }
        else {
            if (albums[i].approved === true) {
                result.approved.push(albums[i]);
            }
            else {
                result.notApproved.push(albums[i]);
                if (albums[i].tracks.length !== 0) {
                    if (albums[i].tracks.length === 1) {
                        result.cleanGems.push(albums[i]);
                    }
                    else {
                        result.dirtyGems.push((albums[i]));
                    }
                }
            }
        }
    }
    return result;
};

export const hexRandomDigits = (numberOfDigits, maxValue) => {
    let result = [];

    for (let i = 0; i < numberOfDigits; i++) {
        let possible = Math.floor(Math.random() * maxValue + 1);
        while (result.includes(possible) === true) {
            possible = Math.floor(Math.random() * maxValue + 1);
        }
        result.push(possible);
    }
    return result;
};



export const stringHasWords = (stringToCheck, words) => {

    let checkBox = 0;

    //console.log('looking for: ' + words[0].toLowerCase());

    for (let i = 0; i < words.length; i++) {
        if (stringToCheck.toLowerCase().indexOf(words[i].toLowerCase()) !== -1) {
            checkBox++;
        }
    }

    return checkBox === words.length;
};