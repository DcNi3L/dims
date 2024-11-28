const express = require("express");
const { ethers } = require("ethers");
const app = express();
require("dotenv").config();
app.use(express.json());

const CONTRACT_ADDRESS = "your_contract_address";
const ABI = "your_contract_abi"; // Import or copy ABI here

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

app.get("/identity/:address", async (req, res) => {
    const address = req.params.address;
    const identity = await contract.getIdentity(address);
    res.json(identity);
});

app.listen(3000, () => console.log("Server running on port 3000"));
