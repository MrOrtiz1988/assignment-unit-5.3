console.log('***** Music Collection *****');

let collection = [];
let tracks = [
    {'Yellow': '4:33', 'Trouble': '4:51', 'Sparks': '3:48'}, 
    {'The Scientist': '5:10', 'In My Place': '3:47', 'Clocks': '5:08'}, 
    {'White Iverson': '4:17', 'Congratulations': '3:40', 'I Fall Apart': '3:43'}, 
    {'Candy Paint': '3:48', 'Psycho': '3:41', 'Paranoid': '3:42'}, 
    {'Wishing Well': '3:15', 'Righteous': '4:02', 'Conversations': '3:02'}, 
    {'Burn': '3:37', 'Not Enough': '2:52', 'Relocate': '3:28'}
];

//addToCollection adds albums to collection array with objects
function addToCollection(title, artist, yearPublished, songs){
let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    songs: songs
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



//search function searches a criteria from an array and returns all that matches, if no match is found then
//then an empty array is returned and if nothing is put in search then all items in array is returned 
function search(entry){
    let searched = [];
    
    for(i=0; i < collection.length; i++){
        if(collection[i].title === entry){
            searched.push(collection[i]);
        } else if (collection[i].artist === entry){
            searched.push(collection[i]);
        } else if (collection[i].yearPublished === entry){
            searched.push(collection[i]);
        } else if(!entry){
            return collection;
        }
    }
        return searched;   
}


//adding 6 albums into collections array
addToCollection('Parachutes', 'Coldplay', 2000, tracks[0]);
addToCollection('A Rush of Blood to the Head', 'Coldplay', 2002, tracks[1]);
addToCollection('Stoney', 'Post Malone', 2016, tracks[2]);
addToCollection('Beer Bongs & Bentleys', 'Post Malone', 2018, tracks[3]);
addToCollection('Legends Never Die', 'Juice WRLD', 2020, tracks[4]);
addToCollection('Fighting Demons', 'Juice WRLD', 2021, tracks[5]);
//returning to console what is in collection array so far
console.log(collection);
//calling the showCollection function to test
showCollection(collection);
//testing findByArtist function, output should be both albums of post malone and coldplay in results array
findByArtist('Post Malone', collection);
findByArtist('Coldplay', collection);
//testing findByArtist on failed search, output should be an empty array
findByArtist('Taylor Swift', collection);
//testing search with different criteria, title, artist or year published
console.log(search('Juice WRLD')); 
console.log(search('Stoney'));
console.log(search(2000));
console.log(search(2020));
//testing search for non-existing item from array
console.log(search('Lil Wayne'));
//testing search for for nothing typed it the search criteria
console.log(search());

