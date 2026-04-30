const { add, greet } = require('../src/app');
if (add(2, 3) !== 5) { console.error('add failed'); process.exit(1); }
if (greet('World') !== 'Hello, World!') { console.error('greet failed'); process.exit(1); }
console.log('All tests passed');
