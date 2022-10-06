const HDWalletProvider = require('@truffle/hdwallet-provider');

const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

require('dotenv').config();


const provider = new HDWalletProvider({
    mnemonic:process.env.mnemonic,
    providerOrUrl:process.env.link,
    gas: 5465030}
);

const web3 = new Web3(provider);
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attemping to deploy to accounts ', accounts[0]);
    try{
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: '0x' + compiledFactory.bytecode })
        .send({gas: "5000000", from: accounts[0] });
        console.log('Contract deploy to ', result.options.address);
    }
        catch(e){
            console.error(e)
        }

};

deploy();