fetch('http://localhost:3030/jsonstore/blog/posts')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));


fetch('URL', {

    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fisrstName: 'Andrey', lastName: 'Stoyanov' }) // (data)
})

fetch('/url/:id', {

    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
})

fetch('/url/:id', {

    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
})

fetch('/url/:id', {
    method: 'DELETE',
})

// Promise.then

function logFetch(url) {
    return fetch(url)
        .then(res => {
            return res.text()
        })
        .then(text => {
            console.log(text);
        })
        .catch(err => {
            console.error(err);
        });
}

//Async / await

async function logFetch(url) {

    try {

        const res = await fetch(url);
        console.log(await res.text());

    } catch (err) {
        console.log(err);
    }
    
}

async function getData() {
    const URL = 'http://localhost:3030/jsonstore/blog/posts';

    try {

        let res = await fetch(URL);
        let data = await res.json();
        console.log(data);

    } catch(err) {
        console.log(err);
        
    }
}
