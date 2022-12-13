import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks:{
    bsc: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      accounts: ['090dcc59fd59375c21b37654c490604b5345f5a1e2ccc61341d9d66fec5b62b4']
    },
  }
};

export default config;
