const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('Web3');
const {interface, bytecode} = require ('./compile');

const provider = new HDWalletProvider(
   'observe brief sense draw mad ranch vessel poverty gossip comfort kiss stay' ,
   'https://rinkeby.infura.io/v3/1741b865df4d46e4ad06660e3cc0daa7',

);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy for the account',accounts[0]);

   const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data:'0x' + bytecode})
        .send({gas:1000000 ,from: accounts[0]});

        console.log(interface);    
        console.log('Contract is deployed to', result.options.address); 
};
deploy();