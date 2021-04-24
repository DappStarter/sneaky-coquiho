require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name random saddle concert harvest drop slot gaze'; 
let testAccounts = [
"0xb66f1ae17ea2495aac95d13741dda085e2262058664b68282bdaffb17411a250",
"0xb2a5e0feabf109a300f8879a98cf38d05abf7ec57d9d883ab23235dd897727b7",
"0x0eaf4c1db618ad81a7d0bd9da46f2776fd3a9958bfe1688dedc6a6d74e8a5d5d",
"0xe49c8f0bcf8ab761ee0323c0bb85e1a51a9526ed7dec4a43885e177e32d451d4",
"0x69bb4a6917080d8dbdb7f60f79a40db7e9a62e6ff41ee4bf5b27cfc8a5591043",
"0xa4c9d7f573e98e47a3671472361feeab658fa7b8a13be2908a93960a245d3961",
"0x9ccbe7c9a2e7c6c7b0c2ac797073df7773178c7959ad942861ffea867e34e3e7",
"0x4dde9b31e81bba0929a9b401b7f52f8bb14b00ec36af4ba853e4d8e5b2d3c4cc",
"0x86e3d27862d1627da279f7b9904c32115123ee6e046171878811d92663ab285f",
"0x14348e7d1b13e129becd2fee70778c7b13d4b92ccd8b8a7170b6e5c6371a9bd6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
