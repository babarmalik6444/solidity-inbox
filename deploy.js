const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const{ interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'wonder choose park virtual loop that paddle room laptop ride absorb garlic',
    'https://rinkeby.infura.io/v3/93fa444be7c74b5a95e6cdb41af15e37'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Account using for deployments' , accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments:['Hi There!'] })
    .send({ gas:'1000000', from: accounts[0] });

    console.log('Contract Deployed to : ', result.options.address);
}

deploy();