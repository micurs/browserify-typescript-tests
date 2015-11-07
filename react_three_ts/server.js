var hs = require("http-server"); 
var server = hs.createServer({"root": "."}); 
console.log('listening on port 3000');
server.listen(3000); 