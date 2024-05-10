
function job() {
    return new Promise(function(resolve, reject) {
        resolve();
    });
}

let promise = job();

promise

.then(function() {
    console.log('Success 1');
},function() {
    console.log('hello');
})

.then(function() {
    console.log('Success 2');
})

.then(function() {
    console.log('Success 3');
})

.catch(function() {
    console.log('Error 1'); 
})

.then(function() {
    console.log('Success 4');
})
.catch(function() {
    console.log('Error 2'); 
})

function add(a,b){
    return a+b
}




// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);  
//     //  su

//     return job(false);
// })

// .catch(function(error) {
//     console.log(error);  
//     // er

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);
//     // 'Error caught'

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);
// });

// // 2

// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promis = job(true);

// promis

// .then(function(data) {
//     console.log(data);
//     // succ

//     return job(true);
// })

// .then(function(data) {
//     if (data !== 'victory') {
//         throw 'Defeat';
//     }

//     return job(true);
// })

// .then(function(data) {
//     console.log(data);
//     // succ
// })

// .catch(function(error) {
//     console.log(error);

//     return job(false);
// })

// .then(function(data) {
//     console.log(data);
// //    erro

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return new Error('test');
// })

// .then(function(data) {
//     console.log('Success:', data.message);
// })

// .catch(function(data) {
//     console.log('Error:', data.message);
// });