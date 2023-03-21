console.log('***** Music Collection *****');

let collection = [];

//addToCollection adds albums to collection array with objects
function addToCollection(title, artist, yearPublished){
let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
};
collection.push(album);
console.log(collection[collection.length - 1]);
}

//show collection displays each collection formatted like: `TITLE by ARTIST, published in YEAR`.
function showCollection(array){
    for(i=0; i < array.length; i++){
        console.log(array[i].title + ' by ' + array[i].artist + ' published in ' + array[i].yearPublished + '.');
    }
}

//findByArtist acts as a mini search engine to find an artist and its contents on the console 
function findByArtist(artist, array){
    let results = [];
    for(i=0; i < array.length; i++){
        if(array[i].artist == artist){
            results.push(array[i]);
        }
    }
    console.log(results);
}

//adding 6 albums into collections array
addToCollection('Yellow', 'Coldplay', 2000);
addToCollection('The Scientist', 'Coldplay', 2002);
addToCollection('White Iverson', 'Post Malone', 2016);
addToCollection('Candy Paint', 'Post Malone', 2018);
addToCollection('Wishing Well', 'Juice WRLD', 2020);
addToCollection('Righteous', 'Juice WRLD', 2020);
//returning to console what is in collection array so far
console.log(collection);
//calling the showCollection function to test
showCollection(collection);
//testing findByArtist function, output should be both albums of coldplay in results array
findByArtist('Post Malone', collection);
findByArtist('Coldplay', collection);
//testing findByArtist on failed search, output should be an empty array
findByArtist('Taylor Swift', collection);