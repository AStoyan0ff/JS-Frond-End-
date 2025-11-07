function songs(input) {
    class Song {

        constructor(typeList, name, time) {

            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const songsList = [];
    const songsCnt = Number(input[0]);
    const songType = input[input.length - 1];

    for (let pos = 1; pos <= songsCnt; pos++) {

        const [typeList, name, time] = input[pos].split('_');
        songsList.push(new Song(typeList, name, time));
    }

    if (songType === 'all') {
        songsList.forEach(song => console.log(song.name));
    } 
    else {
        songsList
            .filter(song => song.typeList === songType)
            .forEach(song => console.log(song.name));
    }
}

console.log('----------------'); 

songs([
    
    3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);

console.log('----------------'); 

songs([

    4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'
]);

console.log('----------------'); 

songs([

    2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
]);
