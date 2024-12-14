function getImgUrl(name){
    return new URL(`../assets/books/${name}`, import.meta.url);
}

function getnewsUrl(name){
    return new URL(`../assets/news/${name}`, import.meta.url);
}

export {getImgUrl, getnewsUrl};