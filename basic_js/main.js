var unique = require('uniq');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

var out = unique(data)
console.log(out);
document.getElementById('out').innerHTML = JSON.stringify(out);  