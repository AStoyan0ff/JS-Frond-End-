let promise1 = Promise.reject('test1');
let promise2 = Promise.resolve('test2');
let promise3 = Promise.finally('test3');

let promise4 = Promise.all([promise1, promise2, promise3])
    .then(res => console.log(res))
    .catch(err => console.log(err));
    
    

let promise = new Promise(function(resolve, reject) {

    setTimeout(() => {
        resolve('all is good');
        
    }, 2000);
});

promise
    .then(res => console.log(res));

let promiseTwo = new Promise(function(resolve, reject) {

    setTimeout(() => {
        reject('there was a problem');
        
    }, 2000);
});

promiseTwo
    .catch(error => console.log(error));
