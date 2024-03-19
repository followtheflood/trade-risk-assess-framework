const trade_risk_assess_framework = require('trade-risk-assess-framework');
const trade_risk_assess_framework_usage = require('trade-risk-assess-framework-usage');
const react = require('react');
const truffle = require('truffle');
const nodemon = require('nodemon');
const cheerio = require('cheerio');
const solc = require('solc');
const redux = require('redux');
const debug = require('debug');
const enzyme = require('enzyme');
const request = require('request');
const babel_core = require('babel-core');

const os = require('os');
console.log(`Your platform is ${os.platform()}`);

module.exports = {
  myFunction: function() { console.log('Exported function called'); },
  myVariable: 'Exported variable'
};

// Get information about an Ethereum block
const blockNumber = 123456;
web3.eth.getBlock(blockNumber).then(block => {
  console.log('Block details:', block);
}).catch(err => {
  console.error('Error getting block details:', err);
});

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

const fs = require('fs');
fs.readFile('config.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }
    try {
        const data = JSON.parse(jsonString);
        console.log("Server name is", data.serverName);
    } catch(err) {
        console.log('Error parsing JSON:', err);
    }
});

// Interact with a deployed smart contract using Hardhat
async function interactWithContract() {
  const contractAddress = '0xcontractAddress';
  const YourContract = await ethers.getContractFactory('YourContract');
  const contract = await YourContract.attach(contractAddress);

  const result = await contract.someMethod();
  console.log('Method result:', result);
}

interactWithContract().catch(err => {
  console.error('Error interacting with contract:', err);
});

const path = require('path');
console.log(`Current working directory: ${path.resolve()}`);