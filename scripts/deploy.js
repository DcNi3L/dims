const { ethers } = require("hardhat");

async function main() {
    const IdentityManager = await ethers.getContractFactory("IdentityManager");
    const contract = await IdentityManager.deploy();
    await contract.deployed();
    console.log("Contract deployed to:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
