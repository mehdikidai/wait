# mk-wait

`mk-wait` is a simple utility function that returns a Promise which resolves after a specified delay. This function can be useful when you want to pause the execution of an asynchronous function for a certain amount of time.

## Installation

You can install `mk-wait` using npm:

````bash
npm install mk-wait

```js

const wait = require('mk-wait');

(async () => {
    console.log('Start waiting...');

    // Wait for the default 1 second
    await wait();

    console.log('Finished waiting after 1 second!');
})();

````
