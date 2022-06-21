require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace casual flee seed edge rare remind concert hunt industry success thing'; 
let testAccounts = [
"0xd0a1d00ff5bc0214fb8a5b9397b363a4f090845a9960f3f1c9cee90384ac505a",
"0x801d4b8fd569c1a98bc658f3bf1b1ed3144d8c85b00eed2e96a4ae758592351b",
"0xb5fea5ef14e62dee8e720a4cad5e1dce3ae8865d4d750a9787f9c942d3d40c3e",
"0xd38d62d6ee1cc5e99af3ef3dd1a3a003e701dad8727a58176e27ae1fc22992c5",
"0xea1360ea9b3e05b6863347ad67a404d0437dde13e6ab9021d616c9ab17d1179b",
"0x20112c743f0541130bb3220ab1c903993a6ca64f66d21a03f74d7550a75caa73",
"0x564d1d4d46fed5ac69b31db74ae397d0a421f1d54d556d76b4339a350382434d",
"0x87e8804d0fc631d0cae5efca4cc0062858602946bb30005351f25a5ef059d6bd",
"0xe47dee5f1daa42c97daac7e578584b20ca4fe7e527d9b3feb5e55c4e29c4f367",
"0xa23042b9f86759a9a99c0322f5e5e4238ec1647f5f45c40dc8c7ceabec12d170"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

