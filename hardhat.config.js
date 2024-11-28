require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // To use environment variables for sensitive data

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "", // RPC URL for Sepolia
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [] // Private key for deploying
    }
  }
};
