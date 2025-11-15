function movies(input) { 

    let movies = [];

    for (let data of input) {

        if (data.startsWith('addMovie ')) {
           
            let name = data.replace('addMovie ', '');
            movies.push({name});

        } else if (data.includes(' directedBy ')) {

            let [name, director] = data.split(' directedBy ');
            let movie = movies.find(m => m.name === name);
            
            if (movie) movie.director = director;

        } else if (data.includes(' onDate ')) {

            let [name, date] = data.split(' onDate ');
            let movie = movies.find(m => m.name === name);

            if (movie) movie.date = date;
        }
    }

    for (let movie of movies) {

        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}

movies([

    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
