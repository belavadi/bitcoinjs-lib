
let bitcoin =  require('bitcoinjs-lib')
// Create EC pair
var keyPair = bitcoin.ECPair.makeRandom(); // bitcoin.networks.testnet
// Convert key pair into walletInterchangeFormat
let walletInterchangeFormat = keyPair.toWIF()
// Converting walletInterchangeFormat to address
let btcAddress = keyPair.getAddress()


// console.log(keyPair);
// console.log(keyPair);
console.log("WIF: "+walletInterchangeFormat);
console.log("Bitcoin Address: "+btcAddress);



let tx = new bitcoin.TransactionBuilder()

var txId = 'aa94ab02c182214f090e99a0d57021caffd0f195a81c24602b1028b130b63e31'
tx.addInput(txId, 0)


tx.addOutput("1Gokm82v6DmtwKEB8AiVhm82hyFSsEvBDK", 15000)

// Initialize a private key using WIF
var privateKeyWIF = 'L1uyy5qTuGrVXrmrsvHWHgVzW9kKdrp27wBC7Vs6nZDTF2BRUVwy'
var keyPair = bitcoin.ECPair.fromWIF(privateKeyWIF)

tx.sign(0, keyPair)

console.log(tx.build().toHex())
