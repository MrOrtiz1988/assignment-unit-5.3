console.log('***** Music Collection *****');

let collection = [];

function addToCollection(title, artist, yearPublished){

let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
};

collection.push(album);
console.log(collection[collection.length - 1]);
}

function showCollection(array){
    for(i=0; i < array.length; i++){
        console.log(array[i].title + ' by ' + array[i].artist + ' published in ' + array[i].yearPublished + '.');
    }
}

addToCollection('Yellow', 'Coldplay', 2000);
addToCollection('The Scientist', 'Coldplay', 2002);
addToCollection('White Iverson', 'Post Malone', 2016);
addToCollection('Candy Paint', 'Post Malone', 2018);
addToCollection('Wishing Well', 'Juice WRLD', 2020);
addToCollection('Righteous', 'Juice WRLD', 2020);
console.log(collection);
showCollection(collection);