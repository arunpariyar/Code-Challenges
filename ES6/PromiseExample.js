// "use strict";
var promiseCount = 0;

function testPromise() {
    let thisPromiseCount = ++promiseCount;
    let log = document.getElementById('log');
    // begin
    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Started (Sync code started)');
    // We make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s)
    let p1 = new Promise((resolve, reject) => {
        // The executor function is called with the ability to resolve or reject the promise
        log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise started (Async code started)');
        // This is only an example to create asynchronism
        window.setTimeout(function () {
            // We fulfill the promise !
            resolve(thisPromiseCount);
        }, Math.random() * 2000 + 1000);
    });

    // We define what to do when the promise is resolved with the then() call,
    // and what to do when the promise is rejected with the catch() call
    p1.then(function (val) {
        // Log the fulfillment value
        log.insertAdjacentHTML('beforeend', val + ') Promise fulfilled (Async code terminated)');
    }).catch((reason) => {
        // Log the rejection reason
        console.log(`Handle rejected promise (${reason}) here.`);
    });
    // end
    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise made (Sync code terminated)');
}
