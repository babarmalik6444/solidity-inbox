const path = require('path');
const fileSystem = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fileSystem.readFileSync(inboxPath, 'utf8');

//console.log(solc.compile(source,1));

module.exports = solc.compile(source,1).contracts[':Inbox'];